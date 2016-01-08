import React from 'react-native'
import Header from './Header'

const { View, Text } = React;

class Group extends React.Component {
  render () {
    return (
      <View>
        <Header title="My collectives" hasBackButton={true} navigator={this.props.navigator}></Header>
        <Text>I like trains</Text>
      </View>
    )
  }
}

export default Group;
