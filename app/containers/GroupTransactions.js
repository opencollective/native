import React from 'react-native'
import Header from '../components/Header'

const { View, Text } = React;

class GroupTransactions extends React.Component {
  render () {
    let { group, navigator } = this.props
    console.log(group);
    console.log(navigator);
    return (
      <View>
        <Header title={group.name} hasBackButton={true} navigator={navigator}></Header>
        <Text>Hola</Text>
      </View>
    )
  }
}

export default GroupTransactions;
