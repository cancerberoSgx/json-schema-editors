/*
The idea aof this class is not working directly with html element so we can mock DOM for testing
*/
export class HTMLElementFacade {
  element:HTMLElement
  constructor(element:HTMLElement) {
    this.element = element
  }
  setInnerHtml(html:string):void{
    this.element.innerHTML=html
  }
}
