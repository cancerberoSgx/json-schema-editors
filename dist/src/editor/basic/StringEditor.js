"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractEditor_1 = require("../AbstractEditor");
/** jsdoc test123 */
var StringEditor = (function (_super) {
    __extends(StringEditor, _super);
    function StringEditor() {
        return _super.call(this) || this;
    }
    StringEditor.prototype.load = function (schema) {
        _super.prototype.load.call(this, schema);
    };
    StringEditor.prototype.fetch = function (element) {
        return '';
    };
    StringEditor.prototype.render = function (element) {
        if (this.schema.type != 'string') {
            throw new Error('StringEditor is not able to handle schema type ' + this.schema.type);
        }
        else {
            element.setHtml(this.getHtml());
        }
    };
    StringEditor.prototype.getHtml = function () {
        return 'hello';
    };
    return StringEditor;
}(AbstractEditor_1.AbstractEditor));
exports.StringEditor = StringEditor;
//# sourceMappingURL=StringEditor.js.map