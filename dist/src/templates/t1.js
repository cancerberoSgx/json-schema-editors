"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// following code will load a template by reading it from fs - this works both in node and in browserify !!
var fs = require('fs');
var _ = require('underscore');
var template = fs.readFileSync('./src/templates/t1.html').toString();
template = _.template(template);
// module.exports = template
exports.default = template;
//# sourceMappingURL=t1.js.map