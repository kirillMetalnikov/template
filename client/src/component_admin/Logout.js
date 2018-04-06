import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Segment, Table, Header} from 'semantic-ui-react'

import {logout} from '../actions'

class Logout extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    this.props.logout()
  }
  
  render() {
    return (
      <div className = 'main-content'>
        <Container>
          <Segment padded>
            <h1>Logout</h1>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default connect(null, {logout})(Logout)
