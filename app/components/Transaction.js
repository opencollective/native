import React from 'react-native'
import Currency from './Currency'
import TransactionStatus from './TransactionStatus'

const { View, Text, TouchableHighlight, Image, StyleSheet } = React;

class Transaction extends React.Component {
  render () {
    let { createdAt, description, amount, currency } = this.props
    return (
      <View>
        <TouchableHighlight>
          <View style={styles.container}>
            <Image style={styles.photo} source={require('../assets/images/default_avatar.png')} />
            <View>
              <Text>{this.props.description}</Text>
              <View>
                <Currency value={amount} currency={currency} />
                <TransactionStatus {...this.props} />
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  photo: {
    width: 56,
    height: 56,
    marginRight: 10,
    borderRadius: 28
  }
})

export default Transaction;
