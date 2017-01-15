import { Component } from '@angular/core';

import { Project, Client } from '../shared';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private projects: [Project] = [
    new Project('coo2plan', 'http://placehold.it/550x450'),
    new Project('sos', 'http://placehold.it/550x450'),
    new Project('coo2plan', 'http://placehold.it/550x450')
  ]

  private clients: [Client] = [
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' },
    { name: 'Client', img: 'http://placehold.it/350x300', href: '#' }
  ]

  private openingHours = {
    // sunday is 0, monday is 1, ...
    days: [1, 2, 3, 4, 5],
    hours: {
      start: { h: 9, m: 0 },
      end: { h: 18, m: 0 }
    }
  }

  get openingStatus(): string {
    return this.weOpen ? 'open' : 'closed';
  }

  get weOpen(): boolean {
    let date = new Date;
    let h = date.getUTCHours();
    let m = date.getUTCMinutes();

    return (this.openingHours.days.indexOf(date.getUTCDay()) !== -1) &&
      (h >= this.openingHours.hours.start.h ||
        (h === this.openingHours.hours.start.h && m >= this.openingHours.hours.start.m)
      ) &&
      (h <= this.openingHours.hours.end.h ||
        (h === this.openingHours.hours.end.h && m <= this.openingHours.hours.end.m));
  }

}
