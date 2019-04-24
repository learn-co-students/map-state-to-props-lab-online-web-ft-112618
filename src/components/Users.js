import React, { Component } from 'react';
import { connect } from 'react-redux'


class Users extends Component {

  render() {

    return (
      <div>
        {this.props.users.length}
        <ul>
          {this.props.users.map((user, key) => <li key={key}>{'User: ' + user.username + 'Hometown: ' + user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users);
