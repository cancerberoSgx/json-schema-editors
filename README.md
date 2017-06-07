#a js sample project with:

 * typescript, 
 * browserify, 
 * brfs, 
 * node

the idea is to be able to write code using ts, being able to require pure js libraries, and be able to use browserify and brfs utility like to go to the browser. Also have some unit test with jasmine that run in node

##run it in node

	tsc src/index.ts
	node src/

## run specs in node

(specs written with jasmine)

	tsc spec/*.ts
	npm test

## browser 

(same as before but this time open it in html browser)

	browserify -o dist/bundle.js -p tsify -t brfs --debug src/index.ts
	firefox dist/index.html


## browserify bundle in node 

(same as before but run it in node)

	browserify -o dist/bundle.js -p tsify -t brfs --debug src/index.ts
	node dist/bundle.js

##development framework

(first command will watch for file changes in .ts and recompile bundle.js automatically) 

	watchify -o dist/bundle.js -p tsify -t brfs --debug src/index.ts
	firefox dist/index.html





#initial ideas
 
 * be able to edit json-schema visually
 
 * editors infrastructure must be able to run in browser & server - server sould be able to generate editor html and js or server response-reader to collect data
 
 * editor api : 
 
	editor.createFrom(schema)
	editor.load(object1)
	var editedData = editor.fetch()
 
 * editor parser for parsing "$ref" linking to other documents - done!
 * html app to administer several schemas - edit the schema-of-schema
 * enrich json to add editor-related metadata - user is able to publish new Schemas/urls
 * array let the user add/remove/reorder items
 * object properties add/remove/order
 * if a property is of type document
 * group stuff in two projects - one parsing a editor infrastructure - the other with a reference application
 
#initial concepts
 
 * users & groups
 * Schema: url, owner user, 
 
#ideas for the future
 
 * I buy an account that is a container with a node server that has schemas and records in mongodb. i can create data schema and records, user&groups, visually
 * other : http://jsonforms.io/#/examples/layouts
