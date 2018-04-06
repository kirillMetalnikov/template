import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
import {connect} from 'react-redux'
import history from '../history'

import Header from './Header'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Page404 from '../component/Page404'

import {getUser} from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUser()
  }

  render() {
    return (
      <Router history= {history}>
        <div>
          <Header />
          <Switch>
            <Route exact path ='/admin' component={Home} />
            <Route exact path='/admin/login' component={Login} />
            <Route exact path='/admin/logout' component={Logout} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(null, {getUser})(App)
