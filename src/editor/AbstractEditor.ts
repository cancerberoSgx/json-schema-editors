import {Editor} from "./Editor"
import {Schema} from "../json-schema/Schema"


export abstract class AbstractEditor<T> implements Editor<T> {

	schema: Schema

	load(schema: Schema):any{
		this.schema = schema
	}

	abstract fetch(element:HTMLElement):T

	abstract render(element:HTMLElement):void
}
