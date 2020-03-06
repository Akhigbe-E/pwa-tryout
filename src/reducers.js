import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_ERROR
} from "./constants";

const initialSearchState = { searchFieldInput: "" };

export const searchRobots = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchFieldInput: action.payload };

    default:
      return state;
  }
};

const initialRobotsState = {
  isPending: false,
  robots: [],
  error: ""
};
export const requestRobots = (state = initialRobotsState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...initialRobotsState, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...initialRobotsState,
        isPending: false,
        robots: action.payload
      };
    case REQUEST_ROBOTS_ERROR:
      return {
        ...initialRobotsState,
        isPending: false,
        error: action.payload
      };

    default:
      return state;
  }
};
