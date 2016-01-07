import React, { PropTypes } from 'react-native';

const { View, Text, Image } = React;

class EmptyList extends React.Component {
  render () {
    return (
      <View>
        <Image></Image>
      </View>
      <View>
        <Text>Submit your first expense</Text>
        <Text>Once approved, you will be automatically reimbursed</Text>
      </View>
    )
  }
}

export default EmptyList;
