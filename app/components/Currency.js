import React, { PropTypes } from 'react-native';
const { Text } = React;

class Currency extends React.Component {
  render () {
    let { value } = this.props
    return (
      <Text>$ { value }</Text>
    )
  }
}

export default Currency;
