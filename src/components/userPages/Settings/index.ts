import { bindActionCreators } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { Settings } from './Settings';
import { ICombinedReducers } from '../../../reducers/index';
import {
  updateDisplayDarkMode,
  updateDisplayDateFormat,
  updatePrivacyPhoneNumber,
  updatePrivacyEmail,
  updatePrivacyProfile,
  updateMapDarkMode,
} from './../../../actions/SettingsAction';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    state: state.SettingsReducer,
  };
};

const dispatch = useDispatch();
const mapDispatchToProps = () => {
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
