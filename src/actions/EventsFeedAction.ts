import { constants } from './../constants';
import { IEventsFeedAction } from '../reducers/EventsFeedReducer';

export const toggleEventsFeedType = () => {
  return {
    type: constants.updateEventsFeedType,
  };
};

export const goToEvent = (args: IEventsFeedAction) => {
  return {
    type: constants.goToEvent,
    payload: {
      date: args.date,
      title: args.title,
      image: args.image,
    },
  };
};
