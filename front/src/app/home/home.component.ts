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
    {
      name: 'La Scuola Open Source',
      img: '/assets/images/img_logo_sos.jpg',
      href: 'http://lascuolaopensource.xyz'
    }, {
      name: 'Regione Puglia',
      img: '/assets/images/regione.jpg',
      href: 'http://www.regione.puglia.it/'
    }, {
      name: 'PechaKucha Venice',
      img: '/assets/images/logopecha.jpg',
      href: 'http://www.pechakuchavenezia.org/'
    }, {
      name: 'Reactivicity',
      img: '/assets/images/reactivicity.jpg',
      href: '#'
    }
  ]

  private quotes: [string] = [
    'home.quotes.1',
    'home.quotes.2',
    'home.quotes.3',
    'home.quotes.4'
  ]

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

}
