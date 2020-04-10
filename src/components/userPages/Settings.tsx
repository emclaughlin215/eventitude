import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

export class Settings extends React.Component {
  render() {
    return (
      <>
        <ScrollView>
          <View>
            <Text style={styles.text}>Settings</Text>
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
