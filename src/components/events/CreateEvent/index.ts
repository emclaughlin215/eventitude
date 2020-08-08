import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addEvent } from './../../../actions/CreateEventAction';
import { CreateEvent } from './CreateEvent';

const mapStateToProps = (state) => {
  return {
    events: state.EventsReducer.events,
  };
};

const mapDispatchToProps = (dispatch) => {
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
