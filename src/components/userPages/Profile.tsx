import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

interface Props {}

interface State {}

export class Profile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

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
