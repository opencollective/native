import React from 'react-native'
import LoginForm from './app/components/LoginForm'
import GroupTransactions from './app/containers/GroupTransactions'
import GroupList from './app/containers/GroupList'

const { View, AppRegistry, Navigator } = React

const RouterMapper = (route, navigator) => {
  if(route.name === 'home') {
    return <LoginForm navigator={navigator} />
  } else if(route.name === 'user') {
    return <GroupList navigator={navigator} />
  } else if(route.name === 'transaction') {
    return <GroupTransactions group={route.group} navigator={navigator}/>
  }
}

class OpenCollective extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'home', index: 0}}
        renderScene={RouterMapper} />
    )
  }
}

AppRegistry.registerComponent('OpenCollective', () => OpenCollective);
