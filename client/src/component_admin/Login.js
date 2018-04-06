import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Form, Button, Header, Container, Divider, Message, Segment } from 'semantic-ui-react'

import history from '../history'
import {login, clearMessage} from '../actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {input: {login: '', password: ''}}
    this.hundleChange = this.hundleChange.bind(this)
    this.hundleSubmit = this.hundleSubmit.bind(this)
  }

  hundleChange(inputName) {
    return (e) => {
      var {input} = this.state
      input[inputName] = e.target.value
      this.setState({input})
    }
  }

  hundleSubmit(e) {
    e.preventDefault()
    var {login, password} = this.state.input
    var input = {login: '', password: ''}
    this.setState({input})
    this.props.login(login, password)
  }

  componentWillUnmount() {
    this.props.clearMessage()
  }

  render() {
    var {login, password} = this.state.input
    var {loginForm} = this.props
    return (
      <Container>
        <Segment.Group>
          <Segment>
            <Header as='h1'>Login</Header>
          </Segment>
          <Segment>
            <Form
              onSubmit = {this.hundleSubmit}
              error = {loginForm && loginForm.type == 'error'}
            >
              <Message
                error
                header={loginForm ? loginForm.header: ''}
                content={loginForm ? loginForm.text: ''}
              />
              <Form.Field>
                <label>Login</label>
                <input type = 'text' onChange = {this.hundleChange('login')} value = {login} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type = 'password' onChange = {this.hundleChange('password')} value = {password} />
              </Form.Field>
              <Form.Button type='submit' color = 'blue'>Login</Form.Button>
            </Form>
          </Segment>
        </Segment.Group>
      </Container>
    )
  }
}

const mapStateToProps = ({messages}) => {
  var {loginForm} = messages
  return {loginForm}
}
export default connect(mapStateToProps, {login, clearMessage})(Login)
