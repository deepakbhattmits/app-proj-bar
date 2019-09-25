import { combineReducers } from 'redux';
import { getBeer } from '../reducers';

export const store = combineReducers({
    beerData: getBeer,
})