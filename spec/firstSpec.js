"use strict";
/// <re fere nce path="jasmine-globals.ts" />
/// <r ef erence path="@types/jasmine" />
exports.__esModule = true;
var Point_1 = require("../src/basic/Point");
describe('1', function () {
    it('2', function () {
        var p = new Point_1.Point(1, 2);
        expect(p.dist() < 3).toBe(true);
    });
});
