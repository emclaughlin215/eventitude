import { connect } from 'react-redux';
import { Event } from './Event';

const mapStateToProps = (state) => {
  return {
    state: state.EventsFeedReducer,
  };
};

export default connect(mapStateToProps)(Event);
