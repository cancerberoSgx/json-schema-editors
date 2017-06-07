import { AbstractEditor } from "../AbstractEditor"
import {Schema} from "../../json-schema/Schema"

export class StringEditor extends AbstractEditor<String> {

  constructor() {
    super()
  }

  load(schema: Schema) {
    super.load(schema)
  }

  fetch(): String {
    return ''
  }

  render(element: HTMLElement) {
    if (this.schema.type != 'string') {
      throw new Error('StringEditor is not able to handle schema type ' + this.schema.type)
    }
    else {
			// element.in
    }
  }
}
