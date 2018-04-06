import React, {Component} from 'react'
import {connect} from 'react-redux'

import FullScreenImage from './FullScreenImage'
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
          <h1>Home</h1>
      </div>
    )
  }
}

export default connect()(Home)
