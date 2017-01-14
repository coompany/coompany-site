import { OpaqueToken } from '@angular/core';
import { LANG_EN_VALUES } from './langs/en';
import { LANG_IT_VALUES } from './langs/it';

export const TRANSLATIONS = new OpaqueToken('translations');

export const dictionary = {
  en: LANG_EN_VALUES,
  it: LANG_IT_VALUES
};

export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];
