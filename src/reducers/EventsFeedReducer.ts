import { constants } from './../constants';

export interface IEventsFeedReducer {
  showUpcoming: boolean;
  date: string;
  title: string;
  image: string;
}

const defaultState: IEventsFeedReducer = {
  showUpcoming: true,
  date: '',
  title: '',
  image: '',
};

export interface IEventsFeedAction {
  date?: string;
  title?: string;
  image?: string;
}

export interface IEventsFeedActionWithType extends IEventsFeedAction {
  type: string;
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
