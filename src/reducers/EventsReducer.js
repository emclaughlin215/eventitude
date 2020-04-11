const defaultState = {
  events: [
    {
      title: 'New Years Eve',
      date: '31-12-2019',
      image: require('../resources/images/NewYear.jpg'),
    },
    {
      title: 'lauras Birthday',
      date: '29-03-2019',
      image: require('../resources/images/MyBirthday.jpg'),
    },
    {
      title: 'New Years Eve',
      date: '31-12-2020',
      image: require('../resources/images/eventImage1.jpg'),
    },
    {
      title: 'My Birthday',
      date: '01-09-2020',
      image: require('../resources/images/eventImage1.jpg'),
    },
  ],
};

export const EventsReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
