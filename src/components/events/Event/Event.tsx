import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { IEvent } from '../../../reducers/EventsReducer';
import styles from './styles';

export class Event extends React.Component<IEvent> {
  constructor(props: IEvent) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ loading: false });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.scrollView}>
            <Text style={styles.textHeader}>{this.props.title}</Text>
            <Image source={require(this.props.image)} style={styles.image} />
          </View>
          <Text style={styles.textInfo}>Where: Amsterdam</Text>
          <Text style={styles.textInfo}>When: {this.props.dateTime}</Text>
          <Text style={styles.textInfo}>Why: New Year's Eve BOIIII</Text>
        </ScrollView>
      </View>
    );
  }
}
