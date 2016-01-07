import React, { PropTypes } from 'react-native';
import Icon from './Icon';
const { View } = React;

class BackButton extends React.Component {
  render () {
    let backLink = true;
    if(backLink) {
      return (
        <Icon type="left"></Icon>
      )
    } else {
      return (
        <Icon type="right"></Icon>
      )
    }
  }
}

export default BackButton;
