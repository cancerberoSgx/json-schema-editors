export interface Schema {
	type: string// ('object' | 'array' | 'string' | 'TODO')//( ('object' | 'array' | 'string' | 'TODO') | Array<('object' | 'array' | 'string' | 'TODO')> )
	title?: string
	properties?: { [key :string] :Schema }
	description?: string
	minimun?: number
	enum?: (Array<string>|Array<number>|Array<number>)
	additionalProperties?:boolean
	required?: Array<string>
}