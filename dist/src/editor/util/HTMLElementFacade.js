"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
The idea aof this class is not working directly with html element so we can mock DOM for testing
*/
var HTMLElementFacade = (function () {
    function HTMLElementFacade(element) {
        this.element = element;
    }
    HTMLElementFacade.prototype.setHtml = function (html) {
        this.element.innerHTML = html;
    };
    return HTMLElementFacade;
}());
exports.HTMLElementFacade = HTMLElementFacade;
//# sourceMappingURL=HTMLElementFacade.js.map