const defaultState = {
  date: null,
  title: null,
  image: null,
};

export const EventReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GO_TO_EVENT':
      return {
        ...state,
        date: action.date,
        title: action.title,
        image: action.image,
      };
    default:
      return state;
  }
};
