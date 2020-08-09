import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ICombinedReducers } from '../../../reducers';
import { updateDob, updateEmail, updateName, updatePhoneNumber } from './../../../actions/UserAction';
import { Profile } from './Profile';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    state: state.UserReducer,
    settingsState: state.SettingsReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
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
