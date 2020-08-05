import React from 'react';
import { TouchableWithoutFeedback, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export class TouchableIcon extends React.Component<props> {
  constructor(props) {
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

export class TouchableButton extends React.Component<props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        style={{ ...styles.button, backgroundColor: this.props.style.backgroundColor }}
        onPress={() => this.props.callback()}>
        <Text style={{ ...styles.text, color: this.props.style.color }}>{this.props.text}</Text>
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
