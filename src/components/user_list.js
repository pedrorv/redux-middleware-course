import React, { Component } from 'react' 
import { connect } from 'react-redux'
import * as actions from '../actions'

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Dunder Mifflin</p>
        <a className="btn btn-primary">{user.name.toLowerCase()}@dundermifflin.com</a>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, actions)(UserList)