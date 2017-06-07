interface Schema {
	type: ( ('object' | 'array' | 'TODO') | Array<('object' | 'array' | 'TODO')> )
	title: string
	properties: { [key :string] :Schema }
	description: string
	minimun: number
	enum: (Array<string>|Array<number>|Array<number>)
	additionalProperties:boolean
	required: Array<string>
}


/*

example

{
  "title": "Example Schema",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "age": {
      "description": "Age in years",
      "type": "integer",
      "minimum": 0
    },
    "hairColor": {
      "enum": ["black", "brown", "blue"],
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": ["firstName", "lastName"]
}

*/