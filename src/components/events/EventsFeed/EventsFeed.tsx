import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import PreviewEvent from './PreviewEvent';
import AppHeader from './../../appHeader/AppHeader';
import moment from 'moment';
import { Colors } from '@blueprintjs/core';
import { Icon } from 'react-native-elements';
import CreateEvent from './../CreateEvent/index';

export class EventsFeed extends React.Component {
  constructor() {
    super();
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

  getFilteredEvents = (reverse) => {
    return this.props.events
      .filter((event) => reverse * (moment.now() - moment(event.date, 'DD-MM-YYYY')) <= 0)
      .sort(function(a, b) {
        return reverse * (moment(a.date, 'DD-MM-YYYY') - moment(b.date, 'DD-MM-YYYY'));
      })
      .map((value) => (
        <PreviewEvent
          navigation={this.props.navigation}
          key={value.title + '_' + value.date}
          title={value.title}
          date={value.date}
          image={value.image}
        />
      ));
  };

  render() {
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
              <Icon
                name={this.state.createEvent ? 'angle-down' : 'angle-up'}
                style={styles.arrowStyle}
                type="font-awesome"
                iconStyle="solid"
                size={25}
              />
              <Text style={styles.title}> Create Event </Text>
              <Icon
                name={this.state.createEvent ? 'angle-down' : 'angle-up'}
                style={styles.arrowStyle}
                type="font-awesome"
                iconStyle="solid"
                size={25}
              />
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

EventsFeed.propTypes = {
  navigation: PropTypes.shape({
    pageTitle: PropTypes.str,
  }),
  showUpcoming: PropTypes.bool,
  events: PropTypes.arr,
};

export const styles = StyleSheet.create({
  eventsFeed: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  date: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  image: {
    height: 512,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    width: Dimensions.get('window').width,
  },
  expandButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0,
  },
  expandBar: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  newEventArea: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    showUpcoming: state.EventsFeedReducer.showUpcoming,
    events: state.EventsReducer.events,
  };
};

export default connect(mapStateToProps)(EventsFeed);
