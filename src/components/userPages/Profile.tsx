import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

export class Profile extends React.Component {
  render() {
    return (
      <>
        <ScrollView>
          <View>
            <Text style={styles.text}>Profile</Text>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
