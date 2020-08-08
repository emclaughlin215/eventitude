import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { globalStylesLight } from './globalStyles';
import { TouchableButton } from './touchableComponents';
import Contacts from 'react-native-contacts';

export interface IContactSelector {
  addGuestCallback: (g: Contacts.Contact) => void;
  removeGuestCallback: (g: Contacts.Contact) => void;
  contact: Contacts.Contact;
  guests: Contacts.Contact[];
}

export class ContactSelector extends React.Component<IContactSelector> {
  constructor(props: IContactSelector) {
    super(props);
  }

  render() {
    const contactButtonTypes = {
      0: {
        text: 'Add',
        callback: (g: Contacts.Contact) => this.props.addGuestCallback(g),
        buttonStyle: globalStylesLight.buttonPrimary,
      },
      1: {
        text: 'Remove',
        callback: (g: Contacts.Contact) => this.props.removeGuestCallback(g),
        buttonStyle: globalStylesLight.buttonSecondary,
      },
    };
    return (
      <View style={styles.contactDisplayContainer}>
        <Image source={{ uri: this.props.contact.thumbnailPath }} />
        <Text> {this.props.contact.givenName} </Text>
        <Text> {this.props.guests} </Text>
        <TouchableButton
          callback={(g: Contacts.Contact) => contactButtonTypes[0].callback(g)}
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
