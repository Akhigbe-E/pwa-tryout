import React from "react";
import { shallow } from "enzyme";
import { CardList } from "./CardList";

it("test screenshot of CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "KingOfTheNorth",
      email: "john@north.com"
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
