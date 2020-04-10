import {connect} from 'react-redux';
import {EventsFeed} from './EventsFeed';

const mapStateToProps = state => {
  return {
    eventsToShow: state.EventsFeedReducer.eventsToShow,
  };
};

export default connect(mapStateToProps)(EventsFeed);
