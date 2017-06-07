
import {Point} from "./basic/Point"

let p = new Point(1,2)
console.log('point', p)


import template1 from "./templates/t1"
console.log(template1())

var json = require("../test-files/schema1.json")
var parser = require("json-schema-parser")
var schema = parser.parse(json)
console.log('JSON.stringify(schema).length', JSON.stringify(schema).length);
