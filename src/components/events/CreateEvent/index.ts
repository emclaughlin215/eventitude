import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ICombinedReducers } from '../../../reducers';
import { addEvent } from './../../../actions/CreateEventAction';
import { CreateEvent } from './CreateEvent';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    events: state.EventsReducer.events,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      addEvent,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateEvent);
