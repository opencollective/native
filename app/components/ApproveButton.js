'use strict'

import React from 'react-native';
import AsyncButton from './AsyncButton';
const { View } = React;

class ApproveButton extends React.Component {
  render() {
    return (
      <View>
        <AsyncButton></AsyncButton>
      </View>
    )
  }
}

export default ApproveButton;
