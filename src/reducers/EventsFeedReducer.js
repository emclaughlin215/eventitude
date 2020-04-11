const defaultState = {
  showUpcoming: true,
  date: null,
  title: null,
  image: null,
};

export const EventsFeedReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_EVENTS_FEED_TYPE':
      return {
        ...state,
        showUpcoming: !state.showUpcoming,
      };
    default:
      return state;
    case 'GO_TO_EVENT':
      return {
        ...state,
        date: action.date,
        title: action.title,
        image: action.image,
      };
  }
};
