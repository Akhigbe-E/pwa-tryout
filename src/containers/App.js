import React from "react";

import { connect } from "react-redux";

import { setSearchField, requestRobots } from "../actions";
import MainPage from "../components/MainPage";

const mapStateToProps = state => {
  return {
    searchFieldInput: state.searchRobots.searchFieldInput,
    pending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInput: searchInput => dispatch(setSearchField(searchInput)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

const App = props => {
  return <MainPage {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
