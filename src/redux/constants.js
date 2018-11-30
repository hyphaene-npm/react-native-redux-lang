import { createTypes } from 'redux-friends';

export const I18N_RK = 'i18n';
export const SET_LOCALE = 'SET_LOCALE';
export const TRANSLATIONS = 'translations';
export const LOCALE = 'locale';
export const MyTypesArray = [SET_LOCALE];
export const TYPES = createTypes(I18N_RK, MyTypesArray);
