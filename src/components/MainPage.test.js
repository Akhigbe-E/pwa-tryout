import React from "react";
import MainPage from "./MainPage";
import { shallow } from "enzyme";

describe("MainPage component render", () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      searchFieldInput: "",
      handleSearchInput: jest.fn(),
      robots: [
        {
          id: 1,
          name: "Emmanuel",
          email: "emmanuel@tinkrate.com"
        }
      ],
      pending: false,
      onRequestRobots: jest.fn()
    };
    wrapper = shallow(<MainPage {...mockProps} />);
  });
  it("render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   it("filter robots properly", () => {
  //     expect(wrapper.instance().filteredRobots([])("")).toEqual([]);
  //   });
});
