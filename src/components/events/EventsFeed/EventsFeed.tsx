import moment from 'moment';
import React from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationInjectedProps } from 'react-navigation';

import { updateCreateEventFlag } from '../../../actions/EventsFeedAction';
import { IEventsFeedReducer } from '../../../reducers/EventsFeedReducer';
import { IEventsReducer } from '../../../reducers/EventsReducer';
import AppHeader from './../../appHeader';
import CreateEvent from './../CreateEvent';
import PreviewEvent from './PreviewEvent';
import { eventFeedStyles as styles } from './styles';

interface IEventsFeedProps extends NavigationInjectedProps {
  eventsFeedState: IEventsFeedReducer;
  eventsState: IEventsReducer;
  updateCreateEventFlag: typeof updateCreateEventFlag;
}

interface IEventsFeedState {}

export class EventsFeed extends React.Component<IEventsFeedProps, IEventsFeedState> {
  constructor(props: IEventsFeedProps) {
    super(props);
  }

  static navigationOptions: {
    header: null;
  };

  getFilteredEvents = () => {
    console.log(this.props);
    let showUpcoming = this.props.eventsFeedState.showUpcoming;
    return Object.entries(this.props.eventsState.events)
      .filter((event) => showUpcoming === moment(event[1].dateTime, 'DD-MM-YYYY').isAfter(moment.now()))
      .sort(function(a, b) {
        let relativeDate = moment(a[1].dateTime, 'DD-MM-YYYY').isAfter(moment(b[1].dateTime, 'DD-MM-YYYY'));
        return showUpcoming && relativeDate ? 1 : -1;
      })
      .map((value) => <PreviewEvent key={value[1].title + '_' + value[1].dateTime} eventId={value[0]} />);
  };

  render() {
    console.log(this.props.eventsFeedState);
    return (
      <>
        <AppHeader navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.eventsFeed}>{this.getFilteredEvents()}</View>
        </ScrollView>
        <View style={[styles.overlay, { height: this.props.eventsFeedState.createEventFlag ? 600 : 50 }]}>
          <TouchableWithoutFeedback onPress={() => this.props.updateCreateEventFlag()} style={styles.expandButton}>
            <View style={styles.expandBar}>
              <Icon
                name={this.props.eventsFeedState.createEventFlag ? 'angle-down' : 'angle-up'}
                type="font-awesome"
                size={25}
              />
              <Text style={styles.title}> Create Event </Text>
              <Icon
                name={this.props.eventsFeedState.createEventFlag ? 'angle-down' : 'angle-up'}
                type="font-awesome"
                size={25}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={[styles.newEventArea, { height: this.props.eventsFeedState.createEventFlag ? 550 : 0 }]}>
            <CreateEvent cancelCallback={() => this.props.updateCreateEventFlag()} />
          </View>
        </View>
      </>
    );
  }
}
