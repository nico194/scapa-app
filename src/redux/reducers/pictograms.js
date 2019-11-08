import { FETCH_PICTOGRAMS_PENDING,
         FETCH_PICTOGRAMS_ERROR,
         FETCH_PICTOGRAMS_SUCCESS,
         SELECT_PICTOGRAM_TO_PHRASE,
         UNSELECT_PICTOGRAM_TO_PHRASE
  } from '../constants/pictograms';

const initialState = {
    loading: false,
    pictograms: [],
    pictogramsSelected: [],
    err: null
}

function pictogramsReducer(state = initialState, {type, payload}) {
    switch(type) {
        case FETCH_PICTOGRAMS_PENDING: 
            return {
                ...state,
                loading: true
            }
        case FETCH_PICTOGRAMS_ERROR: {
            return {
                ...state,
                loading: false,
                err: payload.err
            }
        }
        case FETCH_PICTOGRAMS_SUCCESS: {
            return {
                ...state,
                loading: false,
                pictograms: payload.pictograms
            }
        }
        case SELECT_PICTOGRAM_TO_PHRASE: {
            return {
                ...state,
                pictogramsSelected: state.pictogramsSelected.concat(payload.pictogram)
            }
        }
        case UNSELECT_PICTOGRAM_TO_PHRASE: {
            return {
                ...state,
                pictogramsSelected: state.pictogramsSelected.filter((pictogram, index) => index !== payload.index)
            }
        }
        default:
            return state;
    }
    
}

export default pictogramsReducer;

