import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { TRANSLATIONS } from './translations';


@Injectable()
export class TranslateService {
  private _currentLang: string;
  private _langObs: Subject<string> = new Subject<string>();

  public get currentLang() {
    return this._currentLang;
  }

  public get langObservable(): Observable<string> {
    return this._langObs;
  }

  // inject our translations
  constructor(@Inject(TRANSLATIONS) private _translations: any) { }

  public use(lang: string): void {
    // set current language
    this._currentLang = lang;
    this._langObs.next(lang);
  }

  private translate(key: string): string {
    // private perform translation
    let translation = key;

    if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
      return this._translations[this.currentLang][key];
    }

    return translation;
  }

  public instant(key: string) {
    // public perform translation
    return this.translate(key);
  }

}
