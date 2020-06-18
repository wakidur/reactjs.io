import React, { Component } from "react";
import { connect } from "react-redux";

export class UserHeader extends Component {
  render() {
    const { user } = this.props;

    if (!user) return null;

    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  // const user = this.props.users.find(user => user.id === this.props.userId)
  user: state.users.find((user) => user.id === ownProps.userId),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
