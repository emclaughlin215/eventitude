import { IEventsFeedAction } from '../reducers/EventsFeedReducer';
import { constants } from './../constants';

export const toggleEventsFeedType = () => {
  return {
    type: constants.updateEventsFeedType,
  };
};

export const updateCreateEventFlag = () => {
  return {
    type: constants.updateCreateEventFlag,
  };
};

export const goToEvent = (args: IEventsFeedAction) => {
  return {
    type: constants.goToEvent,
    payload: {
      eventId: args.eventId,
    },
  };
};
