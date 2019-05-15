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
                    error: err
                })
            })
    }
}