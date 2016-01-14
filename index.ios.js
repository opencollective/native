import React from 'react-native'
import LoginForm from './app/components/LoginForm'
import TransactionNew from './app/components/TransactionNew'
import GroupTransactions from './app/containers/GroupTransactions'
import GroupList from './app/containers/GroupList'

const { View, AppRegistry, Navigator, AsyncStorage } = React

class OpenCollective extends React.Component {
  constructor(props) {
    super(props)
    this.routerMapper = this.routerMapper.bind(this)
    this.state = {
      isLoggedIn: null,
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('logged').then((isLogged) => {
      this.setState({
        isLoggedIn: isLogged
      })
    })
  }

  routerMapper(route, navigator) {
    return <TransactionNew navigator={navigator} />
    if(route.name === 'home' && !this.state.isLoggedIn) {
      return <LoginForm navigator={navigator} />
    } else if(route.name === 'transaction') {
      return <GroupTransactions group={route.group} navigator={navigator}/>
    } else if(route.name === 'submitExpense') {
      return <TransactionNew navigator={navigator} />
    } else if(route.name === 'user' || this.state.isLoggedIn) {
      return <GroupList navigator={navigator} isLoggedIn={this.state.isLoggedIn} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'home', index: 0}}
        renderScene={this.routerMapper} />
    )
  }
}

AppRegistry.registerComponent('OpenCollective', () => OpenCollective);
