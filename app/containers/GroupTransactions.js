import React from 'react-native'
import Header from '../components/Header'
import GroupTitle from '../components/GroupTitle'
import TransactionList from '../components/TransactionList'

const { View, Text, ActionSheetIOS } = React;

const BUTTONS = [
  'Add funds',
  'Add expenses',
  'Cancel'
];
const CANCEL_INDEX = 2;

class GroupTransactions extends React.Component {
   constructor(props) {
    super(props);
    this.showActionSheet = this.showActionSheet.bind(this)
  }
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
    },
    (buttonIndex) => {
      if(buttonIndex === 1) {
        this.props.navigator.push({name:'submitExpense'});
      }
    });
  }
  render () {
    let { group, navigator } = this.props
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
        <Header title={group.name} hasBackButton={true} navigator={navigator}></Header>
        <GroupTitle group={group} />
        <Text>Activity Detail</Text>
        <TransactionList transactions={transactions}></TransactionList>
        <Text onPress={this.showActionSheet}>
          Add expense
        </Text>
      </View>
    )
  }
}

export default GroupTransactions;
