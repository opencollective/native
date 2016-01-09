import React from 'react-native'
import GroupLink from './GroupLink'
import TransactionList from './TransactionList'

const { View, Text } = React;

class Group extends React.Component {
  render () {
    let transactions = [{
      amount: 3,
      currency: 'USD',
      description: 'Hello',
      id: 1,
      GroupId: 2,
      createdAt: 'date',
      user: 2
    }, {
      amount: 3,
      currency: 'USD',
      description: 'Its me',
      id: 2,
      GroupId: 2,
      createdAt: 'date',
      user: 3
    }]
    return (
      <View>
        <GroupLink {...this.props} />
        <TransactionList transactions={transactions}/>
      </View>
    )
  }
}

export default Group;
