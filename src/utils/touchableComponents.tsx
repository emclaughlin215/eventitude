import React from 'react';
import { Icon, TouchableWithoutFeedback } from 'react-native';

export class TouchableIcon extends React.Component {
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
