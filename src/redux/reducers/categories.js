import { FETCH_CATEGORIES_PENDING,
         FETCH_CATEGORIES_ERROR,
         FETCH_CATEGORIES_SUCCESS,
         FETCH_PATIENT_CATEGORIES_SUCCESS,
         FETCH_ADD_CATEGORY_SUCCESS,
         FETCH_ADD_CATEGORIES_TO_FOLDER,
         FETCH_UPDATE_CATEGORY_SUCCESS,
         FETCH_DELETE_CATEGORY_SUCCESS,
         FETCH_DELETE_CATEGORY_TO_FOLDER
       } from '../constants/categories';

const initialState = {
    loading: false,
    categories: [],
    patientCategories: [],
    category: {},
    err: null
}

function categoriesReducer(state = initialState, {type, payload}) {
    switch(type) {
        case FETCH_CATEGORIES_PENDING: 
            return {
                ...state,
                loading: true
            }
        case FETCH_CATEGORIES_ERROR: {
            return {
                ...state,
                loading: false,
                err: payload.err
            }
        }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: payload.categories
            }
        default:
            return state;
    }
}

export default categoriesReducer;

