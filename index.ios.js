'use strict';

import React from 'react-native';
import LoginForm from './app/components/LoginForm';
const { View, AppRegistry } = React;

class OpenCollective extends React.Component {
  render() {
    return (
      <View>
        <LoginForm></LoginForm>
      </View>
    )
  }
}

AppRegistry.registerComponent('OpenCollective', () => OpenCollective);
