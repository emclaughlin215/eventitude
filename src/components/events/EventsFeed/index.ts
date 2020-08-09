import { connect } from 'react-redux';
import { EventsFeed } from './EventsFeed';
import { ICombinedReducers } from '../../../reducers/index';
import { withNavigation } from 'react-navigation';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    state: state.EventsFeedReducer,
  };
};

export default connect(mapStateToProps)(withNavigation(EventsFeed));
