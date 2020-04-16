import { constants } from './../constants';

export const toggleEventsFeedType = () => {
  return {
    type: constants.updateEventsFeedType,
  };
};

export const goToEvent = (date, title, image) => {
  return {
    type: constants.goToEvent,
    date: date,
    title: title,
    image: image,
  };
};
