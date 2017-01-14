import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Language } from '../shared';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() supportedLanguages: [Language]
  @Input() selectedLanguageId: number
  @Output() onLangChanged = new EventEmitter<number>()

  changeLanguage(languageId: number) {
    this.onLangChanged.emit(languageId);
  }

}
