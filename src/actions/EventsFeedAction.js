export const toggleEventsFeedType = () => {
  return {
    type: 'UPDATE_EVENTS_FEED_TYPE',
  };
};

export const goToEvent = (date, title, image) => {
  return {
    type: 'GO_TO_EVENT',
    date: date,
    title: title,
    image: image,
  };
};
