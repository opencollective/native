import React from 'react-native'

const { View, Text } = React;

class Transaction extends React.Component {
  render () {
    return (
      <View>
        <Text>{this.props.description}</Text>
      </View>
    )
  }
}

export default Transaction;
