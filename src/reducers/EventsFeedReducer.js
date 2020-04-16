import { constants } from './../constants';

const defaultState = {
  showUpcoming: true,
  date: null,
  title: null,
  image: null,
};

export const EventsFeedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.updateEventsFeedType:
      return {
        ...state,
        showUpcoming: !state.showUpcoming,
      };
    default:
      return state;
    case constants.goToEvent:
      return {
        ...state,
        date: action.date,
        title: action.title,
        image: action.image,
      };
  }
};
