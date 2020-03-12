import React from "react";
import { shallow } from "enzyme";
import { CardList } from "./CardList";

describe("Card", () => {
  let wrapper;
  beforeEach(() => {
    const mockRobots = [
      {
        id: 1,
        name: "John Snow",
        username: "KingOfTheNorth",
        email: "john@north.com"
      }
    ];
    wrapper = shallow(<CardList robots={mockRobots} />);
  });

  it("test screenshot of CardList component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
