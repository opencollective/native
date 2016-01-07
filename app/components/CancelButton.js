import React from 'react-native';
import AsyncButton from './AsyncButton';
import Icon from './Icon';
const { View, Text } = React;

class CancelButton extends React.Component {
  render () {
    return(
      <View>
        <AsyncButton></AsyncButton>
        <Icon type="rejected"></Icon>
        <Text>Cancel</Text>
      </View>
    )
  }
}

export default CancelButton;
