import { Component, OnInit } from '@angular/core';

import { Project, Client } from '../shared';
import { TranslateService } from '../translate';
import { ProjectsService } from '../projects.service';


declare let jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private projects: [Project]

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

  private quotes: [string] = [
    'home.quotes.1',
    'home.quotes.2',
    'home.quotes.3',
    'home.quotes.4'
  ]

  public joinSendTxt: string = 'home.join.send';

  constructor(private translateService: TranslateService,
              private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    jQuery(document).ready(() => {
      this.doTypedQuotes();
    });
  }

  private doTypedQuotes() {
    jQuery('#they-tell-card .quote').typed({
      strings: this.quotes.map(q => { return this.translateService.instant(q) }),
      contentType: 'html',
      typeSpeed: 20,
      loop: true,
      backDelay: 3000
    });
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
