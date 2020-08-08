import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppHeader } from './AppHeader';
import { toggleEventsFeedType } from './../../actions/EventsFeedAction';

const mapStateToProps = (state) => {
  return {
    showUpcoming: state.EventsFeedReducer.showUpcoming,
  };
};

const mapDispatchToProps = (dispatch) => {
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
