import React from 'react-native'
import Header from '../components/Header'
import PaypalReminder from '../components/PaypalReminder'
import Group from '../components/Group'

const { View, Text, AsyncStorage, ListView } = React;

class GroupList extends React.Component {
  render () {
    let { navigator, isLoggedIn, groups } = this.props
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
