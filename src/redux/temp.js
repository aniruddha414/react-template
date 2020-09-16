import * as ActionTypes from './ActionTypes';

export const Temp = (state = { isLoading: true,
    errMsg: null,
    temp:[]
    }, action) => {
    switch (action.type) {
      case ActionTypes.ADD:
            return {...state, isLoading: false, errMsg: null, temp: action.payload};

        case ActionTypes.LOADING:
            return {...state, isLoading: true, errMsg: null, temp: []}

        case ActionTypes.FAILED:
            return {...state, isLoading: false, errMsg: action.payload};
        default:
          return state;
      }
};
