import React, { PropTypes } from 'react-native'
const { View, Text, StyleSheet } = React

class Header extends React.Component {
  constructor() {
    super();
    this._back = this._back.bind(this);
  }
  _back() {
    if(this.props.navigator.getCurrentRoutes().length) {
      this.props.navigator.pop();
    }
  }
  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.backButton} onPress={this._back}>
          {this.props.hasBackButton ? 'Back' : null}
        </Text>
        <Text style={styles.title}>{this.props.title}</Text>
        { this.props.hasForwardButton ?
          <Text style={styles.forwardButton}>Forward</Text> :
            null
        }
      </View>
    )
  }
}

Header.propTypes = {
  hasBackButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
  backLink: PropTypes.string
}

Header.defaultProps = {
  hasBackButton: false,
  title: ''
}

var styles = StyleSheet.create({
  base: {
    height: 45,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#000000',
    borderBottomWidth: 1
  },
  backButton: {
    fontSize: 15,
    marginLeft: 10
  },
  title: {
    color: '#7A7B82',
    fontSize: 18,
    fontWeight: 'bold'
  },
  forwardButton: {
    fontSize: 15,
    marginRight: 10
  }
});

export default Header;
