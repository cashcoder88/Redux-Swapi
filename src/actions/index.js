// we'll need axios
import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const SUCCESS_DATA = 'SUCCESS_DATA';
export const FAILURE_DATA = 'FAILURE_DATA';


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getChars = () => dispatch => {
    dispatch({ type: FETCHING_DATA });
    const request = axios.get('https://swapi.co/api/people/');
    request.then(({ data }) =>{
        console.log(data);
        dispatch({type: SUCCESS_DATA, payload: data.results})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: FAILURE_DATA, payload: err.response})
    })
}

/* function myCleverAction = () => dispatch => {
  const request = axios.get('https://someRadUrlAPI.com/api/coolness);
  request.then(({data}) => {
    dispatch({type: GET_COOL_THING, payload: data.things});
  })
  .catch(err => {
    dispatch({type: ERROR_GETTING_THINGS, error: err});
  });
}; */