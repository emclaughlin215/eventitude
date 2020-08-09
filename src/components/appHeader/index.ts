import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ICombinedReducers } from '../../reducers';
import { toggleEventsFeedType } from './../../actions/EventsFeedAction';
import { AppHeader } from './AppHeader';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    showUpcoming: state.EventsFeedReducer.showUpcoming,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      toggleEventsFeedType,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppHeader);
