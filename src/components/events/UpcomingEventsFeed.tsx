import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import {PreviewEvent} from './PreviewEvent';
import {AppHeader} from './../AppHeader';

interface Props {}

interface State {}

export class UpcomingEventsFeed extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  static navigationOptions: {
    header: null;
  };

  events = [
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
  ];

  render() {
    return (
      <>
        <AppHeader
          navigation={this.props.navigation}
          pageTitle="Upcoming Events"
        />
        <ScrollView>
          <View style={styles.eventsFeed}>
            {this.events.map(value => (
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

const styles = StyleSheet.create({
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
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 80,
  },
});
