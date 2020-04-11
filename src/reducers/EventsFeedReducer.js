const defaultState = {showUpcoming: true};

export const EventsFeedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_EVENTS_FEED_TYPE':
      return {
        ...state,
        showUpcoming: !state.showUpcoming,
      };
    default:
      return state;
  }
};
