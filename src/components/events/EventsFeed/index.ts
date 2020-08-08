import { connect } from 'react-redux';
import { EventsFeed } from './EventsFeed';

const mapStateToProps = (state) => {
  return {
    showUpcoming: state.EventsFeedReducer.showUpcoming,
    events: state.EventsReducer.events,
  };
};

export default connect(mapStateToProps)(EventsFeed);
