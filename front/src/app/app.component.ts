import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Language } from './shared';
import { TranslateService } from './translate/translate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public supportedLanguages: [Language]
  public selectedLanguageId: number

  constructor(router: Router, private translateService: TranslateService) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector(`#${tree.fragment}`);
          if (element) {
            document.body.scrollTop += element.getBoundingClientRect().top - 60;
          }
        } else {
          document.body.scrollTop = 0;
        }
      }
    });
  }

  ngOnInit() {
    this.supportedLanguages = [
      { code: 'en', display: 'EN' },
      { code: 'it', display: 'IT' }
    ];

    this.changeLanguage(0);
  }

  changeLanguage(index: number) {
    this.selectedLanguageId = index;
    this.translateService.use(this.selectedLanguage.code);
  }

  private get selectedLanguage(): Language {
    return this.supportedLanguages[this.selectedLanguageId];
  }

}
