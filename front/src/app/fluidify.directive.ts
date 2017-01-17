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

  private static getComputedProp(prop: string): number {
    const value = parseInt(getComputedStyle(jQuery('.container')[1])[prop]);
    return isNaN(value) ? 0 : value;
  }

  get containerWidth(): number {
    return FluidifyDirective.getComputedProp('width');
  }

  get containerPaddingLeft(): number {
    return FluidifyDirective.getComputedProp('paddingLeft');
  }

  get leftSpacing(): number {
    return (window.innerWidth - this.containerWidth) / 2 + this.containerPaddingLeft;
  }

}
