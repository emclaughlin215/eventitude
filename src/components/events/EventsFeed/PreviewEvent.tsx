import moment from 'moment';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { goToEvent } from '../../../actions/EventsFeedAction';
import { previewStyles as styles } from './styles';

interface IPreviewEventProps extends NavigationInjectedProps {
  date: string;
  title: string;
  image: string;
}

export class PreviewEvent extends React.Component<IPreviewEventProps> {
  constructor(props: IPreviewEventProps) {
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
        <Image source={{ uri: this.props.image }} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
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
)(withNavigation(PreviewEvent));
