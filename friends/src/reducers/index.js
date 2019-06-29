import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE, LOGIN_SUCCESS,  LOGIN_START, ADDING_FRIEND, ADDING_FRIEND_ERROR, ADDING_FRIEND_START } from "../actions";


const initialState = {
    friends: [],
    fetchingFriends: false,
    err: '',
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS: 
        return {
            ...state,
            fetchingFriends: true,
        }
        case FETCHING_FRIENDS_SUCCESS: 
        return {
            ...state,
            fetchingFriends: false,
            friends: action.payload
        }
        case FETCHING_FRIENDS_FAILURE: 
        return {
            ...state,
            fetchingFriends: false,
            err: action.payload
        }

        case LOGIN_START: 
        return {
            ...state,
            loggingIn: true
        }
        case LOGIN_SUCCESS: 
        return {
            ...state,
            loggingIn: false
        }

        case ADDING_FRIEND_START:
            return {
                ...state,
                err:'',
                savingFriends:true
            }
        case ADDING_FRIEND:
            return {
                ...state,
                friends: action.payload,
                savingFriends:true,
                err:''
            }

        case ADDING_FRIEND_ERROR:
            return{
                ...state,
                savingFriends:false,
                err: action.payload
            }

        default:
            return state
    }
}

export default reducer;