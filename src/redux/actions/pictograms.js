import { FETCH_PICTOGRAMS_PENDING,
         FETCH_PICTOGRAMS_ERROR,
         FETCH_PICTOGRAMS_SUCCESS, 
         FETCH_ADD_PICTOGRAM_SUCCESS,
         SELECT_PICTOGRAM_TO_PHRASE,
         UNSELECT_PICTOGRAM_TO_PHRASE,
       } from '../constants/pictograms';
import config from '../../config';

export const getPictogramsByPatient = id => {
    return dispatch => {
        dispatch({ type: FETCH_PICTOGRAMS_PENDING});
        fetch(`${config.server}/pictograms/patient/${id}`)
        .then(res => res.json())
        .then(pictograms => dispatch({ type: FETCH_PICTOGRAMS_SUCCESS, payload: {pictograms}}))
        .catch( err => dispatch({ type: FETCH_PICTOGRAMS_ERROR, payload: {err}}))
    }
}

export const getPictogramsByCategory = (id) => {
    return dispatch => {
        dispatch({ type: FETCH_PICTOGRAMS_PENDING});
        fetch(`${config.server}/pictograms/category/${id}`)
        .then(res => res.json())
        .then(pictograms => dispatch({ type: FETCH_PICTOGRAMS_SUCCESS, payload: {pictograms}}))
        .catch( err => dispatch({ type: FETCH_PICTOGRAMS_ERROR, payload: {err}}))
    }
}

export const addPictogram = (pictogram) => {
    const formData = new FormData();
    formData.append("pictogramImage", pictogram.image);
    formData.append("description", pictogram.description);
    formData.append('category_id', pictogram.idCategory); 
    return dispatch => {
        fetch(`${config.server}/pictograms`, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            pictogram.image = data.response.path;
            pictogram.id = data.response.id
            return data.insert === 'success' ? dispatch({ type: FETCH_ADD_PICTOGRAM_SUCCESS, payload: { pictogram }}) : 'error'
        })
        .catch(err => dispatch({type: FETCH_PICTOGRAMS_ERROR, payload: {err}}));
    }
}


export const selectPictogramToPhrase = pictogram => {
    return dispatch => {
        dispatch({ type: SELECT_PICTOGRAM_TO_PHRASE, payload: {pictogram} })
    }
}

export const unselectPictogramToPhrase = index => {
    return dispatch => {
        dispatch({ type: UNSELECT_PICTOGRAM_TO_PHRASE, payload: {index} })
    }
}
