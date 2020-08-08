import { connect } from 'react-redux';
import { EventsFeed } from './EventsFeed';
import { ICombinedReducers } from '../../../reducers/index';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    state: state.EventsFeedReducer,
  };
};

export default connect(mapStateToProps)(EventsFeed);
