const defaultState = {showUpcoming: true};

export const EventsFeedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_EVENTS_FEED_TYPE':
      const showingUpcoming = state.eventsToShow;
      return {
        ...state,
        showUpcoming: !showingUpcoming,
      };
    default:
      return state;
  }
};

export default EventsFeedReducer;
