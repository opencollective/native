import React from 'react-native'
import AsyncButton from './AsyncButton'
const { View, Text, Image, TouchableHighlight, StyleSheet } = React

class PaypalReminder extends React.Component {
  render () {
    let status = 'test'
    return (
      <View style={styles.container}>
        <Text style={styles.description}>{this.message(status)}</Text>
        <AsyncButton>Login with Paypal</AsyncButton>
      </View>
    )
  }
  message(status) {
    if (status === 'success') {
      return 'You have successfully approved your Paypal account';
    } else if (status === 'failure') {
      return 'Something went wrong. Please try again later';
    } else {
      return 'Please, connect your PayPal account to start sending funds.'
    }
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '##fffbe1'
  },
  description: {
    color: '#cfa236',
    textAlign: 'center'
  }
});

export default PaypalReminder;
