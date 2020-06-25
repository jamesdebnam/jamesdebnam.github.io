import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App testing", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it("renders Header component", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });
});
