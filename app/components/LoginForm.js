import React from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'

const { View, Text, Image, TouchableHighlight, StyleSheet, AsyncStorage } = React

class LoginForm extends React.Component {
  constructor() {
    super();
    this._next = this._next.bind(this);
  }
  _next() {
    AsyncStorage.setItem("logged", 'true')
    this.props.navigator.push({
      name: 'user'
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        <Text style={styles.description}>Collect money & disperse it transparently</Text>
        <GiftedForm formName='login' />
        <GiftedForm.TextInputWidget
          name='username'
          title='Username'
          placeholder='email@example.com'
        />
        <GiftedForm.TextInputWidget
          name='password'
          title='Password'
          placeholder='******'
          secureTextEntry={true}
        />
        <GiftedForm.SubmitWidget
          title='LOGIN'
          onSubmit={this._next}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    alignSelf: 'center'
  },
  description: {
    color: '#7A7B82',
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 30,
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#F3C524',
    borderRadius: 3,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

export default LoginForm;
