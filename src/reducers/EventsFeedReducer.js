const defaultState = {eventsToShow: 'upcoming'};

export const EventsFeedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_EVENTS_FEED_TYPE':
      return {
        ...state,
        eventsToShow: action.eventsToShow,
      };
    default:
      return state;
  }
};

export default EventsFeedReducer;
