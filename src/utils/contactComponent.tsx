import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { globalStylesLight } from './globalStyles';
import { TouchableButton } from './touchableComponents';

export class ContactSelector extends React.Component<props> {
  constructor(props) {
    super(props);
  }

  render() {
    const contactButtonTypes = {
      0: {
        text: 'Add',
        callback: () => this.props.addGuestCallback(),
        buttonStyle: globalStylesLight.buttonPrimary,
      },
      1: {
        text: 'Remove',
        callback: () => this.removeGuestCallback(),
        buttonStyle: globalStylesLight.buttonSecondary,
      },
    };
    return (
      <View style={styles.contactDisplayContainer}>
        <Image source={{ uri: this.props.contact.thumbnailPath }} />
        <Text> {this.props.contact.displayName} </Text>
        <Text> {this.props.guests} </Text>
        <TouchableButton
          callback={() => contactButtonTypes[0].callback()}
          text={contactButtonTypes[0].text}
          style={contactButtonTypes[0].buttonStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contactDisplayContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});
