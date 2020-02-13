import React, { Component } from 'react';
import { Button, Input, Required } from '../Utils/Utils';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    TokenService.clearAuthToken();
    const { full_name, nick_name, user_name, password } = ev.target
    const newUser = { full_name: full_name.value, nick_name: nick_name.value, user_name: user_name.value, password: password.value }

    this.setState({ error: null })

    AuthApiService.postUser(newUser)
    .then(res => {
      return AuthApiService.postLogin({
        user_name: newUser.user_name, 
        password: newUser.password
      })
        .then(result => {
          this.props.handleSetUser(user_name.value, 1000)
          full_name.value = ''
          nick_name.value = ''
          user_name.value = ''
          password.value = ''
          this.props.onRegistrationSuccess()
        })
      })
    }

  render() {
    const { error } = this.state
    return (
      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='full_name'>
          <label htmlFor='RegistrationForm__full_name'>
            Full name <Required />
          </label>
          <Input
            name='full_name'
            type='text'
            required
            id='RegistrationForm__full_name'>
          </Input>
        </div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </Input>
        </div>
        <div className='nick_name'>
          <label htmlFor='RegistrationForm__nick_name'>
            Nickname <Required />
          </label>
          <Input
            name='nick_name'
            type='text'
            required
            id='RegistrationForm__nick_name'>
          </Input>
        </div>
        <Button type='submit'>
          Register
        </Button>
      </form>
    )
  }
}
