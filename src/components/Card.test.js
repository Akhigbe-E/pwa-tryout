import React from "react";
import { shallow } from "enzyme";

import Card from "./Card";

describe("Card.js", () => {
  it("card matches snapshot", () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
