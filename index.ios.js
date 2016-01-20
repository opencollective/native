import React from 'react-native'
import LoginForm from './app/components/LoginForm'
import TransactionNew from './app/containers/TransactionNew'
import GroupTransactions from './app/containers/GroupTransactions'
import GroupList from './app/containers/GroupList'

const { View, AppRegistry, Navigator, AsyncStorage } = React

let groups = [
  {id: 1, name: 'Open Collective', balance: 2, currency: 'USD' },
  {id: 2, name: 'Open Collective 2', balance: 3, currency: 'EUR' },
  {id: 3, name: 'Open Collective 3', balance: 3, currency: 'EUR' },
  {id: 4, name: 'Open Collective Example', balance: 3, currency: 'EUR' },
  {id: 5, name: 'Open Collective Example', balance: 3, currency: 'EUR' },
  {id: 6, name: 'Open Collective Example', balance: 3, currency: 'EUR' },
  {id: 7, name: 'Open Collective Example', balance: 3, currency: 'EUR' },
  {id: 8, name: 'Open Collective Example', balance: 3, currency: 'EUR' }
]

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
    if(route.name === 'home' && !this.state.isLoggedIn) {
      return <LoginForm navigator={navigator} />
    } else if(route.name === 'transaction') {
      return <GroupTransactions group={route.group} navigator={navigator}/>
    } else if(route.name === 'submitExpense') {
      return <TransactionNew navigator={navigator} group={route.group}/>
    } else if(route.name === 'user' || this.state.isLoggedIn) {
      return <GroupList navigator={navigator} groups={groups} isLoggedIn={this.state.isLoggedIn} />
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
