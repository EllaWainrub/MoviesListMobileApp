import { SAVE_USER, REMOVE_USER, LOADING_USER, ERROR_USER, GET_TOKEN } from "../actions";

const userReducer = (state = {
    user: null,
    token: '',
    loading: true,
    error: null,
}, action) => {
    switch (action.type) {
        case SAVE_USER:
            return { ...state, user: action.user };
        case REMOVE_USER:
            return { ...state, user: null };
        case LOADING_USER:
            return { ...state, loading: action.isLoading };
        case ERROR_USER:
            return { ...state, error: action.error };
        case GET_TOKEN: 
            return { ...state, token: action.token}
        default:
            return state;
    }
  }
  
  export default userReducer