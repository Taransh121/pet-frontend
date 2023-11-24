import { PetConstants } from '../Actions/ConstantsAction';

const initialState = {
    data: [],
    loading: false,
    error: null
};

const PetReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case PetConstants.getAllPets_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case PetConstants.getAllPets_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };
        case PetConstants.getAllPets_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default PetReducer;