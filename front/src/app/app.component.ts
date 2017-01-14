import { Component, OnInit } from '@angular/core';
import { Language } from './shared';
import { TranslateService } from './translate/translate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private supportedLanguages: [Language]
  private selectedLanguageId: number

  constructor(private translateService: TranslateService) { }

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
