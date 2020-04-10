import React from 'react';
import {PropTypes} from 'prop-types';
import {styles} from './styles';
import {Text, View, Image, TouchableOpacity} from 'react-native';

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
  title: PropTypes.str,
  date: PropTypes.str,
  image: PropTypes.str,
};
