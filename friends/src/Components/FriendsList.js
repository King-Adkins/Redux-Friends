import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import UpdateForm from './UpdateFriendForm';
import { defaultCipherList } from 'constants';

export default class FriendsList extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: []
        }
    }
    componentDidMount() {
        axios
            .get('http://localhost:5000/api/friends')
            .then(re => {
                this.setState({friends: re.data})
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                {this.state.friends.map(friend => {
                    return (
                        <Friend key = {friend.id} friend = {friend}/>
                    )
                })}
            </div>
        )
    }
}