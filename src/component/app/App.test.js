import React from 'react';
import { shallow } from "enzyme"
import App from './App';

describe("app", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })
  it("should have a snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("should have a default state", () => {
    expect(wrapper.state("intro")).toEqual(true)
  })
  it("should change the state of intro to false", () => {
    expect(wrapper.state("intro")).toEqual(true)
    wrapper.instance().exitIntro()
    expect(wrapper.state("intro")).toEqual(false)
  })
})