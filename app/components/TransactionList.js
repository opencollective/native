import React from 'react-native';
import Transaction from './Transaction'

const { View } = React

export default ({transactions = []}) => {
  return (
    <View>
      {transactions.map(transaction => {
        return <Transaction
          key={transaction.id}
          {...transaction}
          />
      })}
    </View>
  )
}
