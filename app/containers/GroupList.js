import React from 'react-native'
import Header from '../components/Header'
import PaypalReminder from '../components/PaypalReminder'
import Group from '../components/Group'

const { View, Text, AsyncStorage, ListView } = React;

class GroupList extends React.Component {
  render () {
    let groups = [
      {id: 1, name: 'Open Collective', balance: 2, currency: 'USD' },
      {id: 2, name: 'Open Collective 2', balance: 3, currency: 'EUR' },
      {id: 3, name: 'Open Collective 3', balance: 3, currency: 'EUR' },
      {id: 4, name: 'Open Collective Example', balance: 3, currency: 'EUR' },
      {id: 5, name: 'Open Collective Example', balance: 3, currency: 'EUR' },
      {id: 6, name: 'Open Collective Example', balance: 3, currency: 'EUR' },
      {id: 7, name: 'Open Collective Example', balance: 3, currency: 'EUR' },
      {id: 8, name: 'Open Collective Example', balance: 3, currency: 'EUR' }
    ]
    let { navigator, isLoggedIn } = this.props
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    let dataSource = ds.cloneWithRows(groups)
    return (
      <View style={{flex: 1}}>
        <Header title="My collectives" hasBackButton={!isLoggedIn} navigator={navigator}></Header>
        <PaypalReminder></PaypalReminder>
        <ListView
          dataSource={dataSource}
          renderRow={(groupData) => <Group {...groupData} navigator={navigator} />}
          />
        <Text onPress={() => AsyncStorage.removeItem('logged') }>Clear</Text>
      </View>
    )
  }
}

export default GroupList;
