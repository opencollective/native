'use strict';

import React from 'react-native';
import LoginForm from './app/components/LoginForm';
import Currency from './app/components/Currency';
import GroupList from './app/containers/GroupList';
const { View, AppRegistry, Navigator } = React;

const RouterMapper = (route, navigator) => {
  if(route.name === 'home') {
    return <LoginForm navigator={navigator} />
  } else if(route.name === 'user') {
    return <GroupList navigator={navigator} />
  } else if(route.name === 'transaction') {
    return <Currency />
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
