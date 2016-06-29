import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signout extends Component {
  constructor(props) {
    super(props)
  }

  componenWillMount() {
    this.props.signoutUser()
  }

  render() {
    return  (<div>Sorry to let you go</div>)
  }
}

export default connect(null, actions)(Signout)
