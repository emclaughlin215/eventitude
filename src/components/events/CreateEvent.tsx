import React from 'react';

import {Text, View} from 'react-native';

interface Props {}

interface State {}

export class CreateEvent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text> Hello, Create a new Event </Text>
      </View>
    );
  }
}
