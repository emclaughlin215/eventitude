import React from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './styles';
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
        image: require('../../resources/images/NewYear.jpg'),
      },
      {
        title: 'lauras Birthday',
        date: 'September 1st 2019',
        image: require('../../resources/images/MyBirthday.jpg'),
      },
    ],
    upcoming: [
      {
        title: 'New Years Eve',
        date: 'December 31st 2020',
        image: require('../../resources/images/eventImage1.jpg'),
      },
      {
        title: 'My Birthday',
        date: 'September 1st 2020',
        image: require('../../resources/images/eventImage1.jpg'),
      },
    ],
  };

  render() {
    return (
      <>
        <AppHeader
          navigation={this.props.navigation}
          pageTitle={
            this.props.showUpcoming ? 'Upcoming Events' : 'Upcoming Events'
          }
        />
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
              source={require('../../resources/images/newEventIcon.png')}
              style={styles.FloatingButtonStyle}
            />
          </TouchableWithoutFeedback>
        </View>
      </>
    );
  }
}

EventsFeed.propTypes = {
  pageTitle: PropTypes.str,
  eventsToShow: PropTypes.str,
  changeEventsFeedType: PropTypes.func,
};
