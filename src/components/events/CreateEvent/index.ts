import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { addEvent } from './../../../actions/CreateEventAction';
import { CreateEvent } from './CreateEvent';
import { ICombinedReducers } from '../../../reducers/index';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    events: state.EventsReducer.events,
  };
};

const dispatch = useDispatch();
const mapDispatchToProps = () => {
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
