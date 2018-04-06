import React, {Component} from 'react'
import {connect} from 'react-redux'

class Test2 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
          <h1>Test2</h1>
      </div>
    )
  }
}

export default connect()(Test2)
