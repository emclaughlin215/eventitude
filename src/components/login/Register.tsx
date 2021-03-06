import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { ICombinedReducers } from '../../reducers';
import { globalStylesLight } from '../../utils/globalStyles';
import { InputLine } from './../../utils/keyValueComponents';
import { styles } from './styles';

interface IRegisterState {
  details: {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    confirmPassword: string;
  };
  message: string;
  passwordsMatch: boolean;
}

export class Register extends React.Component<{}, IRegisterState> {
  constructor() {
    super({});
    this.state = {
      details: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
      },
      message: '',
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
        setStateCallback: (val: string) => {
          details.firstName = val;
          this.setState({ details: details });
        },
        editType: 'text',
      },
      {
        property: 'Last Name: ',
        setStateCallback: (val: string) => {
          details.lastName = val;
          this.setState({ details: details });
        },
        editType: 'text',
      },
      {
        property: 'Username: ',
        setStateCallback: (val: string) => {
          details.username = val;
          this.setState({ details: details });
        },
        editType: 'text',
      },
      {
        property: 'Password: ',
        setStateCallback: (val: string) => {
          details.password = val;
          this.setState({ details: details });
        },
        editType: 'text',
      },
      {
        property: 'Confirm Password: ',
        setStateCallback: (val: string) => {
          details.confirmPassword = val;
          this.setState({ details: details });
        },
        editType: 'text',
      },
    ];
    return (
      <View style={styles.outContainer}>
        <View style={{ ...globalStylesLight.container, ...styles.container }}>
          <InputLine {...inputs} />
          <Button
            title="Register"
            onPress={() => this.validate()}
            disabled={!Object.values(this.state.details).reduce((a, b) => !!a && !!b, true)}
          />
          <Text> {this.state.message} </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    state: state.UserReducer,
  };
};

export default connect(mapStateToProps)(Register);
