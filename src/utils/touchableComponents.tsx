import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

export default class TouchableIcon extends React.Component<props> {
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
