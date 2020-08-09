import React from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ICombinedReducers } from '../../reducers';
import { globalStylesLight } from '../../utils/globalStyles';
import { login } from './../../actions/UserAction';
import { InputLine } from './../../utils/keyValueComponents';

interface ILoginProps extends NavigationInjectedProps {}

interface ILoginState {
  username: string;
  password: string;
  message: string;
}

export class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
    };
  }

  loginActions = () => {
    AsyncStorage.setItem('userId', 'abc')
      .then((_res) => this.props.navigation.navigate('App'))
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
        <InputLine {...inputs} />
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
