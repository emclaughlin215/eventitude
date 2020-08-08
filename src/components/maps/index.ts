import { connect } from 'react-redux';
import { Mapping } from './Mapping';
import { ICombinedReducers } from '../../reducers/index';

const mapStateToProps = (_state: ICombinedReducers) => {
  return {};
};

export default connect(mapStateToProps)(Mapping);
