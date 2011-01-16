/*
 flatstache.js - Logic-less, section-less templates in JavaScript. Expands simple (flat) Mustache templates.
 (c) 2011 Nathan Vander Wilt. MIT license.
*/

var Flatstache = {
    _re3: new RegExp("{{{\\s*(\\w+)\\s*}}}", 'g'),
    _re2: new RegExp("{{\\s*(\\w+)\\s*}}", 'g'),
    _re1: new RegExp("&(?!\\w+;)|[\"'<>\\\\]", "g"),
    _escapeHTML: function(s) {
        return s.replace(Flatstache._re1, function(c) {
             switch(c) {
                 case "&": return "&amp;";
                 case "\\": return "&#92;";
                 case "\"": return "&quot;";
                 case "'": return "&#39;";
                 case "<": return "&lt;";
                 case ">": return "&gt;";
                 default: return c;
             }
         });
    }
};
Flatstache.to_html = function (template, data) {
    return template
        .replace(Flatstache._re3, function (m, key) { return data[key] || ""; })
        .replace(Flatstache._re2, function (m, key) { return Flatstache._escapeHTML(data[key] || ""); });
};
