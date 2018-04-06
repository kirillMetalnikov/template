import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Menu, Container} from 'semantic-ui-react'

import history from '../history'
import {logout} from '../actions'

class NavMenu extends Component {
  constructor(props) {
    super(props)

    this.state = { activeItem: history.location.pathname }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
    history.push(name)
  }

  renderNav(menuItems) {
    var {activeItem} = this.state
    var leftItems = menuItems.filter( item => {
      return !item.right
    })

    var rightItems = menuItems.filter( item => {
      return item.right
    })

    return(
      <Menu size='large' pointing secondary>
        {leftItems.map( (item, index) => {
          return(
            <Menu.Item
              key = {'left'+ index}
              name={item.to}
              active={activeItem == item.to}
              content={item.name}
              onClick={this.handleItemClick}
            />
          )
        })}
        <Menu.Menu position='right'>
          {rightItems.map( (item, index) => {
            return <Menu.Item
              key = {'right'+ index}
              name={item.to}
              active={activeItem == item.to}
              content={item.name}
              onClick={this.handleItemClick}
            />
          })}
        </Menu.Menu>
      </Menu>
    )
  }

  render() {
    var { activeItem } = this.state
    var {user} = this.props

    var menuItems = user && user.login
        ? [
          {to: '/admin/', name: 'Главная'},
          {to: '/admin/logout', name: 'Выйти', right: true}
        ]
        : [
          {to: '/admin/login', name: 'Вход', right: true}
        ]

    return (
      <Container>
        {this.renderNav(menuItems)}
      </Container>
    )
  }
}


function mapStateToProps({user}) {
  return {user}
}
// without {pure: false} an active link don't work (and need to Parent component!!!)
export default connect(mapStateToProps, {logout}, null, {pure: false})(NavMenu)
