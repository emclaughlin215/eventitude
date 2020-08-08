import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { goToEvent } from '../../../actions/EventsFeedAction';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { previewStyles as styles } from './styles';

interface IPreviewEvent {
  date: string;
  title: string;
  image: string;
}

export class PreviewEvent extends React.Component<IPreviewEvent> {
  constructor(props: IPreviewEvent) {
    super(props);
  }

  goToEvent = () => {
    this.props.navigation.navigate('event');
    goToEvent({ date: this.props.date, title: this.props.title, image: this.props.image });
  };

  render() {
    return (
      <TouchableOpacity style={styles.preview} onPress={() => this.goToEvent()}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.date}>{moment(this.props.date, 'DD-MM-YYYY').format('Ha Do MMM YYYY')}</Text>
        </View>
        <Image source={this.props.image} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

const dispatch = useDispatch();
const mapDispatchToProps = () => {
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
