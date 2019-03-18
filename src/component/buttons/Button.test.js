import React from "react"
import { shallow } from "enzyme"
import Buttons from "./Buttons"

const mockSwitchContainer = jest.fn()

describe("button", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Buttons switchContainer={mockSwitchContainer}/>
        )
    })
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot()
    })
    it("should invoke the the mock function", () => {
        wrapper.find("button").at(0).simulate("click")
        expect(mockSwitchContainer).toHaveBeenCalled()
    })
})