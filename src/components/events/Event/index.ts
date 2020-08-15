import { connect } from 'react-redux';

import { ICombinedReducers } from '../../../reducers';
import { Event } from './Event';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    state: state.EventsReducer,
  };
};

export default connect(mapStateToProps)(Event);
