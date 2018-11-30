import { SET_LOCALE, TYPES } from './constants';
import { createAction } from 'redux-friends';

const setLocale = createAction(TYPES[SET_LOCALE]);
export default setLocale;
