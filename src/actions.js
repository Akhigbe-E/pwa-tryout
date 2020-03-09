import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_ERROR
} from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});
let myHeaders = new Headers({
  "Access-Control-Allow-Origin": "https://jsonplaceholder.typicode.com"
});
export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users", {
    headers: myHeaders
  })
    .then(res => res.json())
    .then(res => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: REQUEST_ROBOTS_ERROR, payload: err }));
};
