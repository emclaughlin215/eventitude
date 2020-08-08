import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Settings } from './Settings';
import {
  updateDisplayDarkMode,
  updateDisplayDateFormat,
  updatePrivacyPhoneNumber,
  updatePrivacyEmail,
  updatePrivacyProfile,
  updateMapDarkMode,
} from './../../../actions/SettingsAction';

const mapStateToProps = (state) => {
  return {
    state: state.SettingsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateDisplayDarkMode,
      updateDisplayDateFormat,
      updatePrivacyPhoneNumber,
      updatePrivacyEmail,
      updatePrivacyProfile,
      updateMapDarkMode,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
