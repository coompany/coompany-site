import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Language } from '../shared';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() supportedLanguages: [Language]
  @Input() selectedLanguageId: number
  @Output() onLangChanged = new EventEmitter<number>()
  logoUrl = '/assets/images/coompany_logo_40px.gif'

  activeNavs = {
    what: '',
    projects: '',
    contacts: ''
  }

  constructor(router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (!tree.fragment) {
          const tmp = this.logoUrl;
          this.logoUrl = '';
          window.setTimeout(() => { this.logoUrl = tmp; }, 0);
        }
      }
    });
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
