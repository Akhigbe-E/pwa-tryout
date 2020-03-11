import React from "react";

import { shallow } from "enzyme";
import { Header } from "./Header";

it("test screenshot of Header component", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});
