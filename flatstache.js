/*
 flatstache.js - Logic-less, section-less templates in JavaScript. Expands simple (flat) Mustache templates.
 (c) 2011 Nathan Vander Wilt and Aaron McCall. MIT license.
*/
var Flatstache = (function(){
    var _no_escape_mustaches = /{{{\s*(\w+)\s*}}}/g,
        _escape_mustaches = /{{\s*(\w+)\s*}}/g,
        _escapeables = /[&\"'<>\\]/g,
        _escape_map = {"&": "&amp;", "\\": "&#92;", "\"": "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;"},
        _escapeHTML = function(s) {
            return s.replace(_escapeables, function(c) { return _escape_map[c] || c });
        },
        _val_or_empty = function(val) { return ([undefined, null, false].indexOf(val)>-1) ? "" : val.toString(); },
        pub = {};
    pub.to_html = function (template, data) {
        return template
            .replace(_no_escape_mustaches, function (m, key) { return _val_or_empty(data[key]) })
            .replace(_escape_mustaches, function (m, key) {
                return _escapeHTML(_val_or_empty(data[key]));
            });
    };
    return pub;
})();