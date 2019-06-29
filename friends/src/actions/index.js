import {authenticator} from '../utils/authenticator';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';

export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADDING_FRIEND_START="ADDING_FRIEND_START"
export const ADDING_FRIEND_ERROR ="ADDING_FRIEND_ERROR"

export const LOGIN_START='LOGIN_START';
export const LOGIN_SUCCESS='LOGIN_SUCCESS';

export const login = creds => dispatch =>{
    dispatch({ type: LOGIN_START })
    return authenticator()
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
            return true;
        })
        .catch(err => console.log(err))
}

export const getFriends = () => dispatch => {
    dispatch({type: FETCHING_FRIENDS});
    authenticator()
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
        console.log('Console logging what is returned', res.data);
        dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: res.data});
    })
    .catch(err => {
        dispatch({type: FETCHING_FRIENDS_FAILURE, payload: err});
    });
};

export const addFriend = friend => dispatch => {
    dispatch({type:ADDING_FRIEND_START});
    authenticator()
        .post(`http://localhost:5000/api/friends`, friend)
        .then(res => {
            console.log('Adding a friend, here is data returned:', res.data);
            dispatch({type:ADDING_FRIEND, payload: res.data});
        })
        .catch(error => dispatch({type:ADDING_FRIEND_ERROR, payload:error}));
}