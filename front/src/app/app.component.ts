import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { Language } from './shared';
import { TranslateService } from './translate/translate.service';

declare const jQuery: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public supportedLanguages: [Language]
  public selectedLanguageId: number

  constructor(router: Router,
              private translateService: TranslateService,
              @Inject(DOCUMENT) document: Document) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector(`#${tree.fragment}`);
          if (element) {
            const top = element.getBoundingClientRect().top - 60;
            jQuery(document).scrollTop(jQuery(document).scrollTop() + top);
          }
        } else {
          jQuery(document).scrollTop(0);
        }
      }
    });
  }

  ngOnInit() {
    this.supportedLanguages = [
      { code: 'it', display: 'IT' },
      { code: 'en', display: 'EN' }
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
