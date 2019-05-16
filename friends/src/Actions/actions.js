import axios from 'axios';

export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const FAIL = 'FAIL'

export const getFriends = () => {
    return dispatch => {
        dispatch({type: LOADING})
        axios
            .get('http://localhost:5000/api/friends')
            .then(re => {
                dispatch({
                    type: SUCCESS,
                    payload: re.data
                })
            })
            .catch(err => {
                dispatch({
                    type: FAIL,
                    error: 'Cant Load Friends'
                })
            })
    }
}

    export const createFriend = (newFriend) => {
        return dispatch => {
            dispatch({type: LOADING})
            axios
                .post('http://localhost: 5000/api/friends/', newFriend)
                .then(re => {
                    console.log(re)
                    dispatch({
                        type: FAIL,
                        error: 'Cant Create New Friend'
                    })
                })
        }
    }
