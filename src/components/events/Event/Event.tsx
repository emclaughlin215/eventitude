import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import styles from './styles';

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

Event.propTypes = {};
