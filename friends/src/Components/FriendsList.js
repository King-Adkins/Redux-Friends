import React from 'react';
import Friend from './Friend';
import CreateFriend from './CreatedFriendForm';
import UpdateFriend from './UpdateFriendForm'
import { connect } from 'react-redux';
import { getFriends } from '../Actions/actions';

class FriendsList extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: []
        }
    }
    componentDidMount() {
        this.props.getFriends()
    }
    render() {
        if(this.props.loading === true) {
            return <h2>Loading Friends Now.....</h2>
        }
        return (
            <div>
                {this.state.friends.map(friend => {
                    return (
                        <Friend key = {friend.id} friend = {friend}/>
                    )
                })}
                <CreateFriend />
                <UpdateFriend />
            </div>
        )
    }
}

const mapState = state => {
    return {
        loading: state.loading,
        friends: state.friends
    }
}

export default connect(mapState, {getFriends})
(FriendsList)