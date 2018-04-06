import React, {Component} from 'react'
import {connect} from 'react-redux'

import NavMenu from './NavMenu'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavMenu />
      </div>
    )
  }
}

export default connect()(Header)
