import {Editor} from "./Editor"
import {Schema} from "../json-schema/Schema"
import {HTMLElementFacade} from "./util/HTMLElementFacade"


export abstract class AbstractEditor<T> implements Editor<T> {

	schema: Schema

	load(schema: Schema):any{
		this.schema = schema
	}

	abstract fetch(element:HTMLElementFacade):T

	abstract render(element:HTMLElementFacade):void
}
