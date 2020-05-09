import React from 'react';
import { PropTypes } from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { goToEvent } from '../../../actions/EventsFeedAction';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { previewStyles as styles } from './styles';

export class PreviewEvent extends React.Component {
  goToEvent = (date, title, image) => {
    this.props.navigation.navigate('event');
    this.props.goToEvent(date, title, image);
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.preview}
        onPress={() => this.goToEvent(this.props.date, this.props.title, this.props.image)}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.date}>{moment(this.props.date, 'DD-MM-YYYY').format('Ha Do MMM YYYY')}</Text>
        </View>
        <Image source={this.props.image} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

PreviewEvent.propTypes = {
  date: PropTypes.str,
  title: PropTypes.str,
  image: PropTypes.str,
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      goToEvent,
    },
    dispatch,
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(PreviewEvent);
