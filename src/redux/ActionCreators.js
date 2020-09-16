import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const add = (ad) => ({
    type: ActionTypes.ADD,
    payload: ad
});

export const loading = () => ({
    type: ActionTypes.LOADING
});

export const failed = (errMsg) => ({
    type: ActionTypes.FAILED,
    payload: errMsg
});