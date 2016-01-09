import React from 'react-native'
import Header from '../components/Header'
import PaypalReminder from '../components/PaypalReminder'
import Group from '../components/Group'

const { View, Text } = React;

class GroupList extends React.Component {
  render () {
    let groups = [
      {id: 1, name: 'Open Collective', balance: 2, currency: 'USD' },
      {id: 2, name: 'Open Collective Example', balance: 3, currency: 'EUR' }
    ]
    let navigator = this.props.navigator
    return (
      <View>
        <Header title="My collectives" hasBackButton={true} navigator={navigator}></Header>
        <PaypalReminder></PaypalReminder>
        { groups.map(group => {
          return <Group {...group} navigator={navigator}/>
        })}
      </View>
    )
  }
}

export default GroupList;
