import React from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import {PropTypes} from 'prop-types';

export class Event extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.scrollView}>
            <Text style={styles.textHeader}>
              {this.props.navigation.getParam('eventTitle')}
            </Text>
            <Image
              source={this.props.navigation.getParam('image')}
              style={styles.image}
            />
          </View>
          <Text style={styles.textInfo}>Where: Amsterdam</Text>
          <Text style={styles.textInfo}>
            When: {this.props.navigation.getParam('date')}
          </Text>
          <Text style={styles.textInfo}>Why: New Year's Eve BOIIII</Text>
        </ScrollView>
      </View>
    );
  }
}

Event.propTypes = {
  navigation: PropTypes.shape({
    date: PropTypes.str,
    eventTitle: PropTypes.str,
    image: PropTypes.str,
  }),
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textHeader: {
    fontSize: 40,
    alignSelf: 'flex-start',
    padding: 10,
  },
  textInfo: {
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingLeft: 15,
    paddingTop: 5,
  },
  image: {
    height: Dimensions.get('window').width / 1.5,
    width: Dimensions.get('window').width / 1.5,
    alignItems: 'center',
  },
});
