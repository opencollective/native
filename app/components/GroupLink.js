import React from 'react-native'
import Currency from './Currency'

const { View, Text, TouchableHighlight, StyleSheet } = React;

class GroupLink extends React.Component {
  constructor() {
    super();
    this._next = this._next.bind(this);
  }
  _next(name) {
    this.props.navigator.push({
      name
    })
  }
  render () {
    let { name, balance, currency } = this.props;
    return (
      <View>
        <TouchableHighlight onPress={this._next.bind(null, 'transactions')}>
          <View style={styles.groupContainer}>
            <Text style={styles.name}>{name.toUpperCase()}</Text>
            <Currency style={styles.currency} value={balance} currency={currency} />
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFA',
    borderBottomColor: '#DDE1E4',
    borderBottomWidth: 1,
    padding: 20
  },
  name: {
    fontWeight: 'bold',
    color: '#7FADF2'
  },
  currency: {
  }
})

export default GroupLink;
