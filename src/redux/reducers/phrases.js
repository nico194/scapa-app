import {
    FETCH_PHRASES_PENDING,
    FETCH_PHRASES_ERROR,
    FETCH_PHRASES_SUCCESS
} from '../constants/phrases';

const initialState = {
    loading: false,
    err: null,
    phrases: []
}

const routinesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_PHRASES_PENDING:
            return {
                ...state,
                loading: true
            }
        case FETCH_PHRASES_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.err
            }
        case FETCH_PHRASES_SUCCESS:
            return {
                ...state,
                loading: false,
                phrases: payload.phrases
            }
        default:
            return state;
    }
}

export default routinesReducer;