import axios from 'axios';
import { PetConstants } from './ConstantsAction';

export const getAllPets = () => {
    return async (dispatch) => {
        dispatch({ type: PetConstants.getAllPets_REQUEST });
        const res = await axios.get("https://petbackendd.onrender.com/animal/getAllAnimals");
        // console.log(res);
        if (res.status === 200) {
            dispatch({
                type: PetConstants.getAllPets_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: PetConstants.getAllPets_FAILURE,
                payload: { error: res.data.error },
            });
        }
    };
};
