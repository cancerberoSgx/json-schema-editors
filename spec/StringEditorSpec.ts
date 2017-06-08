
import {StringEditor} from "../src/editor/basic/StringEditor"
import {HTMLElementFacade} from "../src/editor/util/HTMLElementFacade"
import {Point} from "../src/basic/Point"

describe('StringEditor', ()=>
{
	it('StringEditor2',()=>
	{
		var ed = new StringEditor()
		var schema = {type: 'string'}
		ed.load(schema)
		var el = new HTMLElementFacade()
		spyOn(el, 'setHtml')
		expect(el.setHtml).not.toHaveBeenCalled()
		ed.render(el)
		debugger;
		expect(el.setHtml).toHaveBeenCalled()
		expect(el.setHtml).toHaveBeenCalledWith('hello')
	})
})
