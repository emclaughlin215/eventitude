import React from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import PreviewEvent from './PreviewEvent';
import CreateEvent from './../CreateEvent/index';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import AppHeader from './../../appHeader/index';
import { eventFeedStyles as styles } from './styles';
import { IEvent } from '../../../reducers/EventsReducer';
import { NavigationInjectedProps } from 'react-navigation';

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

  getFilteredEvents = (reverse: number) => {
    return this.props.events
      .filter((event) => reverse * (moment.now() - moment(event.dateTime, 'DD-MM-YYYY')) <= 0)
      .sort(function(a, b) {
        return reverse * (moment(a.dateTime, 'DD-MM-YYYY') - moment(b.dateTime, 'DD-MM-YYYY'));
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
    console.log(this.props.events);
    return (
      <>
        <AppHeader navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.eventsFeed}>
            {this.props.showUpcoming ? this.getFilteredEvents(1) : this.getFilteredEvents(-1)}
          </View>
        </ScrollView>
        <View style={[styles.overlay, { height: this.state.createEvent ? 600 : 50 }]}>
          <TouchableWithoutFeedback onPress={() => this.toggleCreateEvent()} style={styles.expandButton}>
            <View transparent={true} style={styles.expandBar}>
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
