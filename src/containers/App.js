import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { CardList } from "../components/CardList";
import SearchField from "../components/SearchField";

import { setSearchField, requestRobots } from "../actions";

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
  const { searchFieldInput, handleSearchInput, robots, pending } = props;

  useEffect(() => {
    props.onRequestRobots();
  }, []);

  // const handleSearchInput = searchInput => {
  //   setsearchFieldInput(searchInput);
  // };
  const filteredRobots = robots.filter(robot =>
    robot.name
      .toLocaleLowerCase()
      .includes(searchFieldInput.toLocaleLowerCase())
  );

  return !pending ? (
    <div className="tc">
      <h1>Robo Friends</h1>
      <SearchField sendSearchInput={handleSearchInput} />
      <CardList robots={filteredRobots} />
    </div>
  ) : (
    <h1 className="tc">Loading..</h1>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
