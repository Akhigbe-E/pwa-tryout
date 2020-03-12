import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { CardList } from "../components/CardList";
import SearchField from "../components/SearchField";

import { Header } from "../components/Header";

const MainPage = props => {
  const {
    searchFieldInput,
    handleSearchInput,
    robots,
    pending,
    onRequestRobots
  } = props;

  useEffect(() => {
    onRequestRobots();
  }, []);

  const filteredRobots = robots => searchFieldInput =>
    robots.filter(robot =>
      robot.name
        .toLocaleLowerCase()
        .includes(searchFieldInput.toLocaleLowerCase())
    );

  return !pending ? (
    <div className="tc">
      <Header title="Robo Friends" />
      <SearchField sendSearchInput={handleSearchInput} />
      <CardList robots={filteredRobots(robots)(searchFieldInput)} />
    </div>
  ) : (
    <h1 className="tc">Loading..</h1>
  );
};

export default MainPage;
