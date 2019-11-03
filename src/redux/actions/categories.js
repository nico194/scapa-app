import { FETCH_CATEGORIES_PENDING,
         FETCH_CATEGORIES_ERROR,
         FETCH_CATEGORIES_SUCCESS
       } from '../constants/categories';
import config from '../../config';

export const getCategoriesByPatient = id => {
    return dispatch => {
        dispatch({ type: FETCH_CATEGORIES_PENDING});
        fetch(`${config.server}/categories/folder/${id}`)
        .then(res => res.json())
        .then(categories => {
            return dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: {categories}})
        })
        .catch( err => dispatch({ type: FETCH_CATEGORIES_ERROR, payload: {err}}))
    }
}
