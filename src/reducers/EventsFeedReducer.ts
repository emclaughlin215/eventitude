import { constants } from './../constants';

export interface IEventsFeedReducer {
  showUpcoming: Boolean;
  date: String;
  title: String;
  image: String;
}

const defaultState: IEventsFeedReducer = {
  showUpcoming: true,
  date: '',
  title: '',
  image: '',
};

export interface IEventsFeedAction {
  type: String;
  date?: String;
  title?: String;
  image?: String;
}

export interface IEventsFeedActionWithType extends IEventsFeedAction {
  type: String;
}

export const EventsFeedReducer = (state = defaultState, action: IEventsFeedActionWithType) => {
  switch (action.type) {
    case constants.updateEventsFeedType:
      return {
        ...state,
        showUpcoming: !state.showUpcoming,
      };
    case constants.goToEvent:
      return {
        ...state,
        date: action.date,
        title: action.title,
        image: action.image,
      };
    default:
      return state;
  }
};
