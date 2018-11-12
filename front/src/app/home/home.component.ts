import { Component, OnInit } from '@angular/core';

import { Project, Client } from '../shared';
import { TranslateService } from '../translate';
import { ProjectsService } from '../projects.service';
import { DeviceService } from '../device.service';


declare let jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: [Project]

  public clients: [Client] = [
    {
      name: 'Regione Puglia',
      img: '/assets/images/puglia.png',
      imgBW: '/assets/images/puglia_bw.png',
      href: 'http://www.regione.puglia.it/'
    }, {
      name: 'PechaKucha Venice',
      img: '/assets/images/pecha.png',
      imgBW: '/assets/images/pecha_bw.png',
      href: 'http://www.pechakuchavenezia.org/'
    }, {
      name: 'Reactivicity',
      img: '/assets/images/reactivicity.png',
      imgBW: '/assets/images/reactivicity_bw.png',
      href: '#'
    }, {
      name: 'La Scuola Open Source',
      img: '/assets/images/SOS.png',
      imgBW: '/assets/images/SOS_bw.png',
      href: 'http://lascuolaopensource.xyz'
    }, {
      name: 'DREX',
      img: '/assets/images/DREX.png',
      imgBW: '/assets/images/DREX_bw.png',
      href: 'http://drexperiment.com/'
    }, {
      name: 'IUAV',
      img: '/assets/images/IUAV.png',
      imgBW: '/assets/images/IUAV_bw.png',
      href: 'http://www.iuav.it/homepage/'
    }, {
      name: 'Onggi',
      img: '/assets/images/onggi.png',
      imgBW: '/assets/images/onggi_bw.png',
      href: 'https://www.onggi.it/'
    }, {
      name: 'DOME',
      img: '/assets/images/dome.png',
      imgBW: '/assets/images/dome_bw.png',
      href: 'https://www.domeproject.space/'
    }
  ]

  public quotes: [string] = [
    'home.quotes.1',
    'home.quotes.2',
    'home.quotes.3',
    'home.quotes.4',
    'home.quotes.5'
  ]

  public isMobile: boolean;

  constructor(private translateService: TranslateService,
              private projectsService: ProjectsService,
              private deviceService: DeviceService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    jQuery(document).ready(() => {
      this.doTypedQuotes();
      this.translateService.langObservable.subscribe(lang => {
        this.doTypedQuotes();
      });
    });

    this.isMobile = this.deviceService.isMobile;
  }

  private doTypedQuotes() {
    jQuery('#they-say-card .quote').typed({
      strings: this.quotes.map(q => { return this.translateService.instant(q) }),
      contentType: 'html',
      typeSpeed: 20,
      loop: true,
      backDelay: 3000
    });
  }

}
