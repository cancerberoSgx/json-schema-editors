"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractEditor_1 = require("../AbstractEditor");
var StringEditor = (function (_super) {
    __extends(StringEditor, _super);
    function StringEditor() {
        return _super.call(this) || this;
    }
    StringEditor.prototype.load = function (schema) {
    };
    StringEditor.prototype.fetch = function () {
        return '';
    };
    return StringEditor;
}(AbstractEditor_1.AbstractEditor));
exports.StringEditor = StringEditor;
//# sourceMappingURL=StringEditor.js.map