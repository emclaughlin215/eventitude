const defaultState = {showUpcoming: false};

export const EventsFeedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_EVENTS_FEED_TYPE':
      const {showingUpcoming} = state;
      const newState = {showUpcoming: !showingUpcoming};
      return newState;
    default:
      return state;
  }
};

export default EventsFeedReducer;
