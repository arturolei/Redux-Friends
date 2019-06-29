import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addFriend} from '../actions';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  addFriend = event => {
      event.preventDefault();
      this.props.addFriend(this.state)
      this.setState({
        name: '',
        age: '',
        email: ''
      });
  }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="email"
            value={this.state.email}
            name="email"
          />
          <button type="submit">Add friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {friends: state.friends}
}

export default connect(mapStateToProps,{addFriend}) (FriendForm);