import React, { PropTypes } from 'react-native';
const { Text } = React;

class Icon extends React.Component {
  render () {
    let type = this.props.type;
    return (
      <Text>Icon {type}</Text>
    )
  }
}

export default Icon;
