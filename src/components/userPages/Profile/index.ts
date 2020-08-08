import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateDob, updateEmail, updateName, updatePhoneNumber } from './../../../actions/UserAction';
import { Profile } from './Profile';

const mapStateToProps = (state) => {
  return {
    state: state.UserReducer,
    settingsState: state.SettingsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
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
