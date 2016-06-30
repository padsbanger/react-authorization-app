import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signup extends Component {
  constructor(props) {
    super(props)
  }

  handleFormSubmit(formProps) {
    this.props.signUpUser(formProps)
  }

  componenWillMount() {
    this.props.signoutUser()
  }

  render() {
    const { handleSubmit, fields: {
      email, password, passwordConfirm
    }} = this.props
    return  (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email: </label>
          <input className="form-control" {...email}/>
          {email.touched && email.error}
        </fieldset>
        <fieldset className="form-group">
          <label>Password: </label>
          <input className="form-control" {...password}/>
          {password.touched && password.error}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password: </label>
          <input className="form-control" {...passwordConfirm}/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    )
  }
}

function validate(formProps) {
  const errors = {}

  if(!formProps.email) {
    errors.email = 'Please enter a email'
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match'
  }

  return errors
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, null, actions)(Signup)
