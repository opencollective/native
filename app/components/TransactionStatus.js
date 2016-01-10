import React, { PropTypes } from 'react-native';
const { Text, View } = React;

export default TransactionStatus = ({approved, approvedAt}) => {
  return (
    <View>
      <Text>{approved}</Text>
    </View>
  )
}
