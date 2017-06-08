"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringEditor_1 = require("../src/editor/basic/StringEditor");
var HTMLElementFacade_1 = require("../src/editor/util/HTMLElementFacade");
describe('StringEditor', function () {
    it('StringEditor2', function () {
        var ed = new StringEditor_1.StringEditor();
        var schema = { type: 'string' };
        ed.load(schema);
        var el = new HTMLElementFacade_1.HTMLElementFacade();
        spyOn(el, 'setHtml');
        expect(el.setHtml).not.toHaveBeenCalled();
        ed.render(el);
        expect(el.setHtml).toHaveBeenCalled();
        debugger;
        expect(el.setHtml).toHaveBeenCalledWith('hello');
    });
});
//# sourceMappingURL=StringEditorSpec.js.map