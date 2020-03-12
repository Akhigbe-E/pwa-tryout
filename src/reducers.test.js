import * as reducers from "./reducers";
import { setSearchField, requestRobots } from "./actions";

describe("Search Robots Reducers", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      searchFieldInput: ""
    };
  });

  it("returns initialstate if state is undefined", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialState);
  });
  it("executes CHANGE_SEARCH_FIELD properly", () => {
    expect(
      reducers.searchRobots(initialState, setSearchField("test"))
    ).toEqual({ ...initialState, searchFieldInput: "test" });
  });
});

describe("Request Robots Reducers", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      isPending: false,
      robots: [],
      error: ""
    };
  });
  it("returns initialState if state is undefined", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
  });
  it("isPending is true for REQUEST_ROBOTS_PENDING ", () => {
    expect(
      reducers.requestRobots(initialState, { type: "REQUEST_ROBOTS_PENDING" })
    ).toEqual({ ...initialState, isPending: true });
  });
  it("isPending is false and payload is updated for REQUEST_ROBOTS_SUCCESS ", () => {
    expect(
      reducers.requestRobots(initialState, {
        type: "REQUEST_ROBOTS_SUCCESS",
        payload: [
          {
            id: 1,
            name: "Emmanuel",
            email: "emmanuel@tinkrate.com"
          }
        ]
      })
    ).toEqual({
      ...initialState,
      isPending: false,
      robots: [
        {
          id: 1,
          name: "Emmanuel",
          email: "emmanuel@tinkrate.com"
        }
      ]
    });
  });
  it("isPending is false and payload is updated for REQUEST_ROBOTS_ERROR ", () => {
    expect(
      reducers.requestRobots(initialState, {
        type: "REQUEST_ROBOTS_ERROR",
        payload: "You messed up something"
      })
    ).toEqual({
      ...initialState,
      isPending: false,
      error: "You messed up something"
    });
  });
});
