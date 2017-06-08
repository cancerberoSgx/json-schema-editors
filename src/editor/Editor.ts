
import {Schema} from "../json-schema/Schema"
import {HTMLElementFacade} from "./util/HTMLElementFacade"
export interface Editor<T> {
	load(schema:Schema):void
	fetch(element:HTMLElementFacade):T
	render(element:HTMLElementFacade):void
}
