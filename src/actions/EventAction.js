export const goToEvent = (date, title, image) => {
  return {
    type: 'GO_TO_EVENT',
    date: date,
    title: title,
    image: image,
  };
};
