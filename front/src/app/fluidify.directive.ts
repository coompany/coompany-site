import { Directive, ElementRef } from '@angular/core';


declare let jQuery: any;

@Directive({ selector: '[coomFluidify]' })
export class FluidifyDirective {

  constructor(el: ElementRef) {
    let nel = el.nativeElement;
    nel.style.width = `${window.innerWidth}px`;
    nel.style.position = 'relative';
    nel.style.left = `-${this.leftSpacing}px`;
  }

  get containerWidth(): number {
    return parseInt(getComputedStyle(jQuery('.container')[0]).width);
  }

  get leftSpacing(): number {
    // dunno why the 15 is needed
    return (window.innerWidth - this.containerWidth) / 2 + 15;
  }

}
