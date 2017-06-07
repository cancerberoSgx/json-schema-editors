
import {Schema} from "../json-schema/Schema"
export interface Editor<T> {
	load(schema:Schema):void
	fetch(element:HTMLElement):T
	render(element:HTMLElement):void
}
