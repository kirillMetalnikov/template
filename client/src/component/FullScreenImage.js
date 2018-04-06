import React, {Component} from 'react'
import {connect} from 'react-redux'

class FullScreenImage extends Component {
  constructor(props) {
    super(props)
    this.state = {clientHeight: 1}
  }

  resize() {
    this.setState({clientHeight: document.documentElement.clientHeight})
  }

  componentDidMount() {
    this.resize()
    window.addEventListener("resize", this.resize.bind(this))
  }

  render() {
    var {top, left} = this.props
    return (
      <div>
        <div 
          className = 'fullScreenImage'
          style = {{
            height: this.state.clientHeight
        }}>
          <div className = 'gradient'
          >
          </div>
        </div>
        <div style = {{
          paddingTop: top,
          paddingLeft: left,
          height: this.state.clientHeight - 70
        }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default FullScreenImage
