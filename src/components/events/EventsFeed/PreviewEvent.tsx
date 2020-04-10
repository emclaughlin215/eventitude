import React from 'react';
import {PropTypes} from 'prop-types';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export class PreviewEvent extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.preview}
        onPress={() =>
          this.props.navigation.navigate('event', {
            eventTitle: this.props.title,
            image: this.props.image,
            date: this.props.date,
          })
        }>
        <View style={styles.header}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.date}>{this.props.date}</Text>
        </View>
        <Image source={this.props.image} style={styles.image} />
      </TouchableOpacity>
    );
  }
}

PreviewEvent.propTypes = {
  navigation: PropTypes.shape({
    date: PropTypes.str,
    title: PropTypes.str,
    image: PropTypes.str,
  }),
};

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
