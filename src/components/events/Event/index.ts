import { connect } from 'react-redux';
import { Event } from './Event';
import { ICombinedReducers } from '../../../reducers/index';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    state: state.EventsFeedReducer,
  };
};

export default connect(mapStateToProps)(Event);
