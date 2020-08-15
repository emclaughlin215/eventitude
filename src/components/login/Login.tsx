import React from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ICombinedReducers } from '../../reducers';
import { globalStylesLight } from '../../utils/globalStyles';
import { login } from './../../actions/UserAction';
import { InputLine } from './../../utils/keyValueComponents';
import { styles } from './styles';

interface ILoginProps extends NavigationInjectedProps {
  login: typeof login;
}

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
      message: 'Try Logging In',
    };
  }

  loginActions = () => {
    AsyncStorage.setItem('userId', 'abc').catch((error) => {
      console.log(error.message);
    });
    this.props.navigation.navigate('App');
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
      <View style={styles.outContainer}>
        <View style={{ ...globalStylesLight.container, ...styles.container }}>
          <InputLine {...inputs} />
          <Button
            title="Login"
            onPress={() =>
              this.props.login(
                this.state.username,
                this.state.password,
                (val: string) => this.setState({ message: val }),
                () => this.loginActions(),
              )
            }
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

const mapDispatchToProps = (dispatch: any) => {
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
