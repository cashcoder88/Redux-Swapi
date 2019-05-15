
import { FETCHING_DATA, SUCCESS_DATA, FAILURE_DATA } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        fetching: true,
        error: ''
      }
    case SUCCESS_DATA:
      return {
        ...state,
        fetching: false,
        error: '',
        characters: action.payload
      }
    case FAILURE_DATA:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
