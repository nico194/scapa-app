import {
    FETCH_PHRASES_PENDING,
    FETCH_PHRASES_ERROR,
    FETCH_PHRASES_SUCCESS
} from '../constants/phrases';
import config from '../../config'

export const getPhrases = id => {
    return dispatch => {
        dispatch({ type: FETCH_PHRASES_PENDING });
        fetch(`${config.server}/phrases/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then( phrases => dispatch({ type: FETCH_PHRASES_SUCCESS, payload: {phrases} }))
        .catch(err => dispatch({ type: FETCH_PHRASES_ERROR, payload: {err} }))
    }
}