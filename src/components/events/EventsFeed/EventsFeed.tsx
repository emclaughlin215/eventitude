import moment from 'moment';
import React from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationInjectedProps } from 'react-navigation';

import { IEvent } from '../../../reducers/EventsReducer';
import AppHeader from './../../appHeader';
import CreateEvent from './../CreateEvent';
import PreviewEvent from './PreviewEvent';
import { eventFeedStyles as styles } from './styles';

interface IEventsFeedProps extends NavigationInjectedProps {
  showUpcoming: boolean;
  events: IEvent[];
}

interface IEventsFeedState {
  createEvent: boolean;
}

export class EventsFeed extends React.Component<IEventsFeedProps, IEventsFeedState> {
  constructor(props: IEventsFeedProps) {
    super(props);
    this.state = {
      createEvent: false,
    };
  }

  static navigationOptions: {
    header: null;
  };

  toggleCreateEvent = () => {
    this.setState({
      createEvent: !this.state.createEvent,
    });
  };

  getFilteredEvents = () => {
    console.log(this.props);
    let showUpcoming = this.props.showUpcoming;
    return this.props.events
      .filter((event) => showUpcoming === moment(event.dateTime, 'DD-MM-YYYY').isAfter(moment.now()))
      .sort(function(a, b) {
        let relativeDate = moment(a.dateTime, 'DD-MM-YYYY').isAfter(moment(b.dateTime, 'DD-MM-YYYY'));
        return showUpcoming && relativeDate ? 1 : -1;
      })
      .map((value) => (
        <PreviewEvent
          key={value.title + '_' + value.dateTime}
          title={value.title}
          date={value.dateTime}
          image={value.image}
        />
      ));
  };

  render() {
    return (
      <>
        <AppHeader navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.eventsFeed}>{this.getFilteredEvents()}</View>
        </ScrollView>
        <View style={[styles.overlay, { height: this.state.createEvent ? 600 : 50 }]}>
          <TouchableWithoutFeedback onPress={() => this.toggleCreateEvent()} style={styles.expandButton}>
            <View style={styles.expandBar}>
              <Icon name={this.state.createEvent ? 'angle-down' : 'angle-up'} type="font-awesome" size={25} />
              <Text style={styles.title}> Create Event </Text>
              <Icon name={this.state.createEvent ? 'angle-down' : 'angle-up'} type="font-awesome" size={25} />
            </View>
          </TouchableWithoutFeedback>
          <View style={[styles.newEventArea, { height: this.state.createEvent ? 550 : 0 }]}>
            <CreateEvent cancelCallback={() => this.toggleCreateEvent()} />
          </View>
        </View>
      </>
    );
  }
}
