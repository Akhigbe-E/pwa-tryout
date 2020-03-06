import React from "react";
import Card from "./Card";

export const CardList = ({ robots }) => {
  return robots.map(({ id, name, email }) => (
    <Card
      id={id}
      name={name}
      email={email}
      key={id}
      src={`https://robohash.org/${id}?200x200`}
    />
  ));
};
