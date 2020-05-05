import React from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { InputLine } from './../../utils/keyValueComponents';

export class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      details: {
        firstName: null,
        lastName: null,
        username: null,
        password: null,
        confirmPassword: null,
      },
      message: null,
      passwordsMatch: false,
    };
  }

  validate = () => {
    if (this.state.details.confirmPassword !== this.state.details.password) {
      this.setState({ message: 'Password must match.', passwordsMatch: false });
    } else {
      this.setState({ message: '', passwordsMatch: true });
    }
  };

  render() {
    const details = { ...this.state.details };
    const inputs = [
      {
        property: 'First Name: ',
        setStateCallback: (val) => {
          details.firstName = val;
          this.setState({ details: details });
        },
        editType: 'text',
      },
      {
        property: 'Last Name: ',
        setStateCallback: (val) => {
          details.lastName = val;
          this.setState({ details: details });
        },
        editType: 'text',
      },
      {
        property: 'Username: ',
        setStateCallback: (val) => {
          details.username = val;
          this.setState({ details: details });
        },
        editType: 'text',
      },
      {
        property: 'Password: ',
        setStateCallback: (val) => {
          details.password = val;
          this.setState({ details: details });
        },
        editType: 'text',
      },
      {
        property: 'Confirm Password: ',
        setStateCallback: (val) => {
          details.confirmPassword = val;
          this.setState({ details: details });
        },
        editType: 'text',
      },
    ];
    return (
      <View>
        <InputLine properties={inputs} />
        <Button
          title="Register"
          onPress={() => this.validate()}
          disabled={!Object.values(this.state.details).reduce((a, b) => !!a && !!b, true)}
        />
        <Text> {this.state.message} </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.UserReducer,
  };
};

export default connect(mapStateToProps)(Register);
