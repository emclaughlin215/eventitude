import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ICombinedReducers } from '../../../reducers';
import {
  updateDisplayDarkMode,
  updateDisplayDateFormat,
  updateMapDarkMode,
  updatePrivacyEmail,
  updatePrivacyPhoneNumber,
  updatePrivacyProfile,
} from './../../../actions/SettingsAction';
import { Settings } from './Settings';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    state: state.SettingsReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
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
