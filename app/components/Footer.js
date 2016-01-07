import React, { PropTypes } from 'react-native';
import Icon from './Icon';
import PopOverMenu from './PopOverMenu';

const { View, Text } = React;

class Footer extends React.Component {
  render () {
    return (
      <View>
        <Icon type="add"></Icon>
      </View>
      <View>
        <PopOverMenu></PopOverMenu>
      </View>
      <View>
        <Text>User Icon</Text>
      </View>
    )
  }
}

export default Footer;
