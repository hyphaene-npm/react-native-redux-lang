import { SET_LOCALE, TRANSLATIONS, TYPES, LOCALE } from './constants';
import { createReducer } from 'redux-friends';

const getDefaultState = (lang, translations) => ({
	[LOCALE]: 'fr',
	[TRANSLATIONS]: translations,
});

const behaviors = {
	[TYPES[SET_LOCALE]]: (state, { payload }) => ({ ...state, [LOCALE]: payload }),
};

const createI18nReducer = lang => createReducer(behaviors, getDefaultState(lang));

export default createI18nReducer;
