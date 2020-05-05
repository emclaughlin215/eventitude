import React from 'react';
import { bindActionCreators } from 'redux';
import { View, Button, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { InputLine } from './../../utils/keyValueComponents';
import { login } from './../../actions/UserAction';

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      message: null,
    };
  }

  loginActions = () => {
    AsyncStorage.setItem('userId', 'abc')
      .then(this.props.navigation.navigate('App'))
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const inputs = [
      {
        property: 'Username: ',
        setStateCallback: (val) => this.setState({ username: val }),
        editType: 'text',
      },
      {
        property: 'Password: ',
        setStateCallback: (val) => this.setState({ password: val }),
        editType: 'text',
      },
    ];
    return (
      <View>
        <InputLine properties={inputs} />
        <Button
          title="Login"
          onPress={() =>
            this.props.login(
              this.state.username,
              this.state.password,
              (val) => this.setState({ message: val }),
              () => this.loginActions(),
            )
          }
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
