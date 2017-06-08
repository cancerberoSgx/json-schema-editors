import { AbstractEditor } from "../AbstractEditor"
import {Schema} from "../../json-schema/Schema"
import {HTMLElementFacade} from "../util/HTMLElementFacade"
/** jsdoc test123 */
export class StringEditor extends AbstractEditor<String> {

  constructor() {
    super()
  }

  load(schema: Schema) {
    super.load(schema)
  }

  fetch(element: HTMLElementFacade): String {
    return ''
  }

  render(element: HTMLElementFacade) {
    if (this.schema.type != 'string') {
      throw new Error('StringEditor is not able to handle schema type ' + this.schema.type)
    }
    else {
		    element.setHtml(this.getHtml())
    }
  }

  getHtml():string {
    return 'hello'
  }
}
