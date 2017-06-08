
var Jasmine = require('jasmine')
var path = require('path')
var glob = require('glob').sync


var jasmineRunner = new Jasmine()
jasmine.DEFAULT_TIMEOUT_INTERVAL = 99999999
var specs = glob(path.join(__dirname, '*Spec.js'))
jasmineRunner.specFiles = specs
jasmineRunner.execute()

