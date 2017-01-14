import { Component, OnInit } from '@angular/core';


declare let jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
