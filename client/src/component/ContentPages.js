import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
import {connect} from 'react-redux'
import history from '../history'

import Header from './Header'
import Test from './Test'
import Test2 from './Test2'
import Test3 from './Test3'
import Page404 from './Page404'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history= {history}>
        <div>
          <Header />
          <Switch>
            <Route exact path = '/test' component={Test} />
            <Route exact path = '/test2' component={Test2} />
            <Route exact path = '/test/:test3' component={Test3} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect()(App)
