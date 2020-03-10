import React from "react";
import { shallow } from "enzyme";

import Card from "./Card";

describe("Card.js", () => {
  it("length of shallow is 1", () => {
    expect(shallow(<Card />).length).toBe(1);
  });
});
