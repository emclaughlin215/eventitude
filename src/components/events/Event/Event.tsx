import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { IEventsReducer } from '../../../reducers/EventsReducer';
import styles from './styles';

export interface IEventPropsWithState extends NavigationInjectedProps {
  state: IEventsReducer;
}

export class Event extends React.Component<IEventPropsWithState> {
  constructor(props: IEventPropsWithState) {
    super(props);
  }

  render() {
    let title = this.props.state.events[this.props.state.currentEvent].title;
    let dateTime = this.props.state.events[this.props.state.currentEvent].dateTime;
    let image = this.props.state.events[this.props.state.currentEvent].image;
    return (
      <View>
        <ScrollView>
          <View style={styles.scrollView}>
            <Text style={styles.textHeader}>{title}</Text>
            <Image source={image} style={styles.image} />
          </View>
          <Text style={styles.textInfo}>Where: Amsterdam</Text>
          <Text style={styles.textInfo}>When: {dateTime}</Text>
          <Text style={styles.textInfo}>Why: New Year's Eve BOIIII</Text>
        </ScrollView>
      </View>
    );
  }
}
