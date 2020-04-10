import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

interface Props {}

interface State {}

export class Settings extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

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
