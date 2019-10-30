import {
    FETCH_USERS_PENDING,
    FETCH_USERS_ERROR,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_SUCCESS,
    USER_LOGOUT,
} from '../constants/users'


const initialState = {
    loading: false,
    user: {},
    err: null
}

const UsersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_USERS_PENDING:{
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_USERS_ERROR: {
            return {
                ...state,
                loading: false,
                err: payload.err
            }
        }
        case USER_LOGOUT:
        case USER_SIGNIN_SUCCESS:
        case USER_SIGNUP_SUCCESS: 
            return {
                ...state,
                loading: false,
                user: payload.user
            }
        
        default:
            return state
    }
}

export default UsersReducer;