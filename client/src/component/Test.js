import React, {Component} from 'react'
import {connect} from 'react-redux'

class Test extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
          <h1>Test</h1>
      </div>
    )
  }
}

export default connect()(Test)
