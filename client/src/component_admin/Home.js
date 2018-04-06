import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Segment, Table, Header} from 'semantic-ui-react'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className = 'main-content'>
        <Container>
          <Segment padded>
            <h1>Панель управления</h1>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default connect()(Home)
