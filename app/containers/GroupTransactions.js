import React from 'react-native'
import Header from '../components/Header'
import GroupTitle from '../components/GroupTitle'
import TransactionList from '../components/TransactionList'

const { View, Text, ActionSheetIOS, AsyncStorage } = React;

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
    this.state = {
      transactions: []
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('expense').then((transactions) => {
      let oldState = this.state.transactions
      let newState = oldState.concat(JSON.parse(transactions))
      console.log(oldState)
      console.log(newState)
      this.setState({ 'transactions': newState })
    })
  }
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
    },
    (buttonIndex) => {
      if(buttonIndex === 1) {
        this.props.navigator.push({name:'submitExpense', group: this.props.group});
      }
    });
  }
  render () {
    let { group, navigator } = this.props
    return (
      <View>
        <Header title={group.name} hasBackButton={true} navigator={navigator}></Header>
        <GroupTitle group={group} />
        <Text>Activity Detail</Text>
        <TransactionList transactions={this.state.transactions}></TransactionList>
        <Text onPress={this.showActionSheet}>
          Add expense
        </Text>
      </View>
    )
  }
}

export default GroupTransactions;
