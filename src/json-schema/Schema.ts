export interface Schema {
	type: ( ('object' | 'array' | 'TODO') | Array<('object' | 'array' | 'TODO')> )
	title: string
	properties: { [key :string] :Schema }
	description: string
	minimun: number
	enum: (Array<string>|Array<number>|Array<number>)
	additionalProperties:boolean
	required: Array<string>
}