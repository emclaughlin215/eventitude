import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import PreviewEvent from './PreviewEvent';
import AppHeader from './../../appHeader/AppHeader';
import moment from 'moment';

export class EventsFeed extends React.Component {
  static navigationOptions: {
    header: null;
  };

  getFilteredEvents = reverse => {
    return this.props.events
      .filter(
        event =>
          reverse * (moment.now() - moment(event.date, 'DD-MM-YYYY')) <= 0,
      )
      .sort(function(a, b) {
        return (
          reverse *
          (moment(a.date, 'DD-MM-YYYY') - moment(b.date, 'DD-MM-YYYY'))
        );
      })
      .map(value => (
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
            {this.props.showUpcoming
              ? this.getFilteredEvents(1)
              : this.getFilteredEvents(-1)}
          </View>
        </ScrollView>
        <View>
          <TouchableWithoutFeedback
            style={styles.TouchableOpacityStyle}
            onPress={() => this.props.navigation.navigate('createEvent')}>
            <Image
              source={require('../../../resources/images/newEventIcon.png')}
              style={styles.FloatingButtonStyle}
            />
          </TouchableWithoutFeedback>
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
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    left: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 80,
  },
  preview: {
    flexDirection: 'column',
    marginTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
});

const mapStateToProps = state => {
  return {
    showUpcoming: state.EventsFeedReducer.showUpcoming,
    events: state.EventsReducer.events,
  };
};

export default connect(mapStateToProps)(EventsFeed);
