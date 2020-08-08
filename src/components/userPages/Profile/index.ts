import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { updateDob, updateEmail, updateName, updatePhoneNumber } from './../../../actions/UserAction';
import { Profile } from './Profile';
import { ICombinedReducers } from '../../../reducers/index';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    state: state.UserReducer,
    settingsState: state.SettingsReducer,
  };
};

const dispatch = useDispatch();
const mapDispatchToProps = () => {
  return bindActionCreators(
    {
      updateDob,
      updateEmail,
      updateName,
      updatePhoneNumber,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
