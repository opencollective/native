import React from 'react-native'
import Currency from './Currency'

const { View, Text, StyleSheet } = React

export default ({group, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{(!!label ? label : 'Current balance').toUpperCase()}</Text>
      <Currency style={styles.currency} value={group.balance} currency={group.currency} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFA',
    borderBottomColor: '#DDE1E4',
    borderBottomWidth: 1,
    padding: 20
  },
  name: {
    fontWeight: 'bold',
    color: '#7FADF2'
  },
  currency: {
  }
})
