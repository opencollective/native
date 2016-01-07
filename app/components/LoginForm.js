import React from 'react-native'
import t from 'tcomb-form-native'
const { View, Text, TouchableHighlight, StyleSheet } = React
const Form = t.form.Form

var Login = t.struct({
  user: t.String,
  password: t.String
})

var loginOptions = {
  auto: 'none',
  fields: {
    user: {
      placeholder: 'email@example.com'
    },
    password: {
      placeholder: '******',
      password: true,
      secureTextEntry: true
    }
  }
}

class LoginForm extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Collect money & disperse it transparently</Text>
        <Form
          ref="form"
          type={Login}
          options={loginOptions}
        />
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>
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
