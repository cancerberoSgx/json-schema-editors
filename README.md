#a js sample project with:

 * typescript,
 * browserify,
 * brfs,
 * node

the idea is to be able to write code using ts, being able to require pure js libraries, and be able to use browserify and brfs utility like to go to the browser. Also have some unit test with jasmine that run in node

## run it in node

	tsc && node src
	# or run the specs:
	tsc && node spec

## run it in ts-node

(ts-node is like node but it will work directly with .ts files)

	ts-node spec/index.ts

## debug specs with devtool

First you need to install devtool (visual node debugger based on chrome developer tools)

	sudo npm install -g devtool

Following, just add a ```debugger````statement in your .ts code where you want to stop and execute:

	tsc && devtool spec

## browser

(same as before but this time open it in html browser)

	browserify -o dist/bundle.js -p tsify -t brfs --debug src/index.ts
	firefox dist/index.html

Little explanation: For run our code in the browser we need the help of browserify and its tsify and brfs extensions and plugins. It will compile the index file into a big bundle.js file that contains all dependencies. The html file just load it. you could also run bundle.js with node: 

	node dist/bundle.js

## development framework

(first command will watch for file changes in .ts and recompile bundle.js automatically)

	watchify -o dist/bundle.js -p tsify -t brfs --debug src/index.ts
	firefox dist/index.html


# initial ideas

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

# initial concepts

 * users & groups
 * Schema: url, owner user,

# ideas for the future

 * I buy an account that is a container with a node server that has schemas and records in mongodb. i can create data schema and records, user&groups, visually
 * other : http://jsonforms.io/#/examples/layouts



feedback to ts-atom extension - enhancement to autocomplete:
1) y type var a = new abc..
2) I choose one type and if there is no import statement for this new type then autoatically add the import statement 
