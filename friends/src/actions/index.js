import axios from 'axios';
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
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
            getFriends();
        })
        .catch()
}

export const getFriends = () => dispatch => {
    dispatch({type: FETCHING_FRIENDS});
    axios
        .get(`http://localhost:5000/api/friends`, { 
            headers: { Authorization: localStorage.getItem('token')}
        })
        .then(res => {
        dispatch({type: FETCHING_FRIENDS_SUCCESS, payload: res.data});
    })
    .catch(err => {
        dispatch({type: FETCHING_FRIENDS_FAILURE, payload: err});
    });
};

export const addFriend = friend => dispatch => {
    dispatch({type:ADDING_FRIEND_START});
    axios
        .post(`http://localhost:5000/api/friends`, friend)
        .then(()=>{dispatch(getFriends())})
        .catch(error => dispatch({type:ADDING_FRIEND_ERROR, payload:error}));
}