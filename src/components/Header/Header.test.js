import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("App testing", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Header />);
  });

  it("renders Header List", () => {
    expect(wrapper.find("ul")).toHaveLength(1);
  });

  it("renders 3 header list items", () => {
    let headerList = wrapper.find("ul");
    expect(headerList.children()).toHaveLength(3);
  });
});
