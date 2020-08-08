import React from 'react';
import { TouchableWithoutFeedback, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { IGlobalButtonStyle, IGlobalContainerStyle } from './globalStyles';

export interface ITouchableIcon {
  callback: () => void;
  name: String;
  library: String;
  size: Number;
  style: String;
  container: IGlobalContainerStyle;
}

export class TouchableIcon extends React.Component<ITouchableIcon> {
  constructor(props: ITouchableIcon) {
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.callback()}>
        <Icon
          name={this.props.name}
          type={this.props.library}
          size={this.props.size}
          iconStyle={this.props.style}
          containerStyle={this.props.container}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export interface ITouchableButton {
  callback: () => void;
  text: String;
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
