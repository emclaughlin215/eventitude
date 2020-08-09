import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

import { globalStylesLight, IGlobalButtonStyle } from './globalStyles';

export interface ITouchableIcon {
  callback: (arg: any) => void;
  name: string;
  library: string;
  size: number;
  container: any;
}

export class TouchableIcon extends React.Component<ITouchableIcon> {
  constructor(props: ITouchableIcon) {
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={(arg: any) => this.props.callback(arg)}>
        <Icon
          name={this.props.name}
          type={this.props.library}
          size={this.props.size}
          containerStyle={{ ...this.props.container, ...globalStylesLight.container }}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export interface ITouchableButton {
  callback: (arg?: any) => void;
  text: string;
  buttonStyle: IGlobalButtonStyle;
}

export class TouchableButton extends React.Component<ITouchableButton> {
  constructor(props: ITouchableButton) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        style={{ ...styles.button, backgroundColor: this.props.buttonStyle.backgroundColor }}
        onPress={() => this.props.callback()}>
        <Text style={{ ...styles.text, color: this.props.buttonStyle.color }}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 150,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});
