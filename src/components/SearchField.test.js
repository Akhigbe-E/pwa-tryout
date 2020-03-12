import React from "react";
import { shallow } from "enzyme";
import SearchField from "./SearchField";

describe("SearchField Rendering", () => {
  it("render correctly", () => {
    expect(shallow(<SearchField />)).toMatchSnapshot();
  });
});

// describe("SearchField Interactions", () => {
//   it("update textfield properly", () => {
//     const wrapper = shallow(<SearchField />).find('[type="search"]');
//     wrapper.simulate("change", { target: { value: "hello" } });
//     expect(wrapper.props().value).toEqual("hello");
//   });
// });
