import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
import {connect} from 'react-redux'
import history from '../history'

import Home from './Home'
import ContentPages from './ContentPages'
import Page404 from './Page404'
import Admin from '../component_admin/Admin'

const hundleRoute = ({match}) => {
  var {isAdmin} = match.params
  return /^admin/i.test(isAdmin)
    ? <Admin />
    : <ContentPages />
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router history= {history}>
        <div>
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route path = '/:isAdmin' render={hundleRoute} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect()(App)
