import React from 'react-native'
const { View, Text, StyleSheet } = React;

class AsyncButton extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.button}>{this.props.children.toUpperCase()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  button: {
    color: "#FFFFFF",
    borderRadius: 3,
    margin: 10,
    padding: 10,
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#298ED8',
    alignSelf: 'stretch'
  }
})

export default AsyncButton;
