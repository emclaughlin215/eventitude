import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {PreviewEvent} from './PreviewEvent';
import {AppHeader} from './../../appHeader/AppHeader';

export class EventsFeed extends React.Component {
  static navigationOptions: {
    header: null;
  };

  events = {
    past: [
      {
        title: 'New Years Eve',
        date: 'December 31st 2019',
        image: require('../../../resources/images/NewYear.jpg'),
      },
      {
        title: 'lauras Birthday',
        date: 'September 1st 2019',
        image: require('../../../resources/images/MyBirthday.jpg'),
      },
    ],
    upcoming: [
      {
        title: 'New Years Eve',
        date: 'December 31st 2020',
        image: require('../../../resources/images/eventImage1.jpg'),
      },
      {
        title: 'My Birthday',
        date: 'September 1st 2020',
        image: require('../../../resources/images/eventImage1.jpg'),
      },
    ],
  };

  render() {
    return (
      <>
        <AppHeader navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.eventsFeed}>
            {this.props.showUpcoming
              ? this.events.upcoming.map(value => (
                  <PreviewEvent
                    navigation={this.props.navigation}
                    key={value.title + '_' + value.date}
                    title={value.title}
                    date={value.date}
                    image={value.image}
                  />
                ))
              : this.events.past.map(value => (
                  <PreviewEvent
                    navigation={this.props.navigation}
                    key={value.title + '_' + value.date}
                    title={value.title}
                    date={value.date}
                    image={value.image}
                  />
                ))}
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
