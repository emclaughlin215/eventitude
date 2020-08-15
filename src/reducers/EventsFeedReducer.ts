import { constants } from './../constants';

export interface IEventsFeedReducer {
  showUpcoming: boolean;
  createEventFlag: boolean;
  currentEvent: string;
}

const defaultState: IEventsFeedReducer = {
  showUpcoming: true,
  createEventFlag: false,
  currentEvent: '',
};

export interface IEventsFeedAction {
  eventId?: string;
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

    case constants.updateCreateEventFlag:
      return {
        ...state,
        createEventFlag: !state.createEventFlag,
      };
    default:
      return state;
  }
};
