import React, {Component} from 'react'
import {connect} from 'react-redux'

class Header extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    )
  }
}

export default connect()(Header)
