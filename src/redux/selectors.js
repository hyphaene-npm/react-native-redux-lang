import { I18N_RK, LOCALE, TRANSLATIONS } from './constants';

export const getLocale = state => state[I18N_RK][LOCALE];
export const getTranslations = state => state[I18N_RK][TRANSLATIONS];
