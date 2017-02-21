import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Language } from '../shared';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends OnInit {
  @Input() supportedLanguages: [Language]
  @Input() selectedLanguageId: number
  @Output() onLangChanged = new EventEmitter<number>()

  activeNavs = {
    what: '',
    projects: '',
    contacts: ''
  }

  changeLanguage(languageId: number) {
    this.onLangChanged.emit(languageId);
  }

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.activeNavs = {
        what: this.isElementVisible(document.getElementById('what-we-do')) ? 'active' : '',
        projects: this.isElementVisible(document.getElementById('projects')) ? 'active' : '',
        contacts: this.isElementVisible(document.getElementById('contacts')) ? 'active' : ''
      };
    })
  }

  private isElementVisible(el: HTMLElement): boolean {
    if (!el)
      return false;
    let rect = el.getBoundingClientRect();
    return rect.top < 70 && (rect.top * -1 <= window.innerHeight + 60);
  }

}
