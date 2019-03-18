import React from "react"
import { shallow } from "enzyme"
import Intro from "./Intro"

describe("intro", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Intro />
        )
    })
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot()
    })
    it("should have a default state", () => {
        expect(wrapper.state()).toEqual({
            title: "",
            bodytext: ""
        })
    })
})