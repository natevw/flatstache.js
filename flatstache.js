/*
 flatstache.js - Logic-less, section-less templates in JavaScript. Expands simple (flat) Mustache templates.
 (c) 2011 Nathan Vander Wilt. MIT license.
*/
var Flatstache = {
    _re3: /{{{\s*(\w+)\s*}}}/g,
    _re2: /{{\s*(\w+)\s*}}/g,
    _re1: /&(?!\w+;)|[\"'<>\\]/g,
    _escape_hash: {"&": "&amp;", "\\": "&#92;", "\"": "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;"},
    _escapeHTML: function(s) {
        return s.replace(Flatstache._re1, function(c) { return Flatstache._escape_hash[c] || c; });
    }
Flatstache.to_html = function (template, data) {
    return template
        .replace(Flatstache._re3, function (m, key) { return data[key] || ""; })
        .replace(Flatstache._re2, function (m, key) { return Flatstache._escapeHTML(data[key] || ""); });
};