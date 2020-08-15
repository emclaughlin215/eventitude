import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateCreateEventFlag } from '../../../actions/EventsFeedAction';
import { ICombinedReducers } from '../../../reducers';
import { EventsFeed } from './EventsFeed';

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    eventsFeedState: state.EventsFeedReducer,
    eventsState: state.EventsReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      updateCreateEventFlag,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(EventsFeed));
