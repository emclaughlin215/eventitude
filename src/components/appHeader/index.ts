import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppHeader } from './AppHeader';
import { toggleEventsFeedType } from './../../actions/EventsFeedAction';
import { ICombinedReducers } from '../../reducers/index';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    showUpcoming: state.EventsFeedReducer.showUpcoming,
  };
};

const dispatch = useDispatch();
const mapDispatchToProps = () => {
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
