import React from 'react';
import { bindActionCreators } from 'redux';
import { View, Button, Text, AsyncStorage } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { InputLine } from './../../utils/keyValueComponents';
import { login } from './../../actions/UserAction';
import { globalStylesLight } from '../../utils/globalStyles';
import { ICombinedReducers } from '../../reducers/index';

interface ILoginState {
  username: string;
  password: string;
  message: string;
}

export class Login extends React.Component<{}, ILoginState> {
  constructor() {
    super({});
    this.state = {
      username: '',
      password: '',
      message: '',
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
        setStateCallback: (val: string) => this.setState({ username: val }),
        editType: 'text',
      },
      {
        property: 'Password: ',
        setStateCallback: (val: string) => this.setState({ password: val }),
        editType: 'text',
      },
    ];
    return (
      <View style={globalStylesLight.container}>
        <InputLine properties={inputs} />
        <Button
          title="Login"
          onPress={() =>
            login(
              this.state.username,
              this.state.password,
              (val: string) => this.setState({ message: val }),
              () => this.loginActions(),
            )
          }
        />
        <Text> {this.state.message} </Text>
      </View>
    );
  }
}

const mapStateToProps = (state: ICombinedReducers) => {
  return {
    state: state.UserReducer,
  };
};

const dispatch = useDispatch();
const mapDispatchToProps = () => {
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
