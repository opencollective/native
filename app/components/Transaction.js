import React from 'react-native'
import Currency from './Currency'
import TransactionStatus from './TransactionStatus'

const { View, Text, TouchableHighlight } = React;

class Transaction extends React.Component {
  render () {
    let { createdAt, description, amount, currency } = this.props
    return (
      <View>
        <TouchableHighlight>
          <View>
            <Text>{this.props.description}</Text>
            <View>
              <Currency value={amount} currency={currency} />
              <TransactionStatus {...this.props} />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Transaction;
