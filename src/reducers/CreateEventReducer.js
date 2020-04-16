import { constants } from './../constants';

const defaultState = {
  title: '',
  dateTime: '',
  location: '',
  description: '',
};

export const createEventReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.addTitle:
      return {
        ...state,
        title: action.payload,
      };
    case constants.addLocation:
      return {
        ...state,
        location: action.payload,
      };
    case constants.addDateTime:
      return {
        ...state,
        dateTime: action.payload,
      };
    case constants.addDescription:
      return {
        ...state,
        description: action.payload,
      };
    default:
      return state;
  }
};
