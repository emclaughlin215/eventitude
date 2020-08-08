import { constants } from './../constants';
import { IEventsFeedAction } from '../reducers/EventsFeedReducer';

export const toggleEventsFeedType = () => {
  return {
    type: constants.updateEventsFeedType,
  };
};

export const goToEvent = (payload: IEventsFeedAction) => {
  return {
    type: constants.goToEvent,
    date: payload.date,
    title: payload.title,
    image: payload.image,
  };
};
