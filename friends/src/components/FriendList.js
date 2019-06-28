import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../actions'
//import Friend from './Friend';

class FriendList extends Component {
    componentDidMount() {
        this.props.getFriends()
    }
    render() {
        if (this.props.fetchingFriends) {
            return <p>...LOADING...</p>
        }
        return (
            <div>
                {this.props.friends.map(friend => <h2>{friend.name}</h2>)}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    fetchingFriends: state.fetchingFriends,
    friends: state.friends,
})

//conneting MSTP, bringin in action creators from getfriends, connecting it to the component FLV
export default connect(mapStateToProps, { getFriends }) (FriendList)