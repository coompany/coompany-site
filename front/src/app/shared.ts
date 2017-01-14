export type Language = { code: string, display: string }

declare let jQuery: any;

export abstract class PageComponent {

  get innerWidth(): number {
    return window.innerWidth;
  }

  get containerWidth(): number {
    return parseInt(getComputedStyle(jQuery('.container')[0]).width);
  }

  get leftSpacing(): number {
    // dunno why the 15 is needed
    return (innerWidth - this.containerWidth) / 2 + 15;
  }

}
