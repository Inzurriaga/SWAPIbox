import React from "react"
import { shallow } from "enzyme"
import MainPage from "./MainPage"

describe("main_page", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <MainPage />
        )
    })
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot()
    });
    it("should have a default state", () => {
        expect(wrapper.state()).toEqual({
            containerDisplay: "",
            peoplesinfo: [],
            planetsinfo: [],
            vehicleinfo: []
        })
    })
    it("should change the state of containerDisplay when function is invoke", () => {
        expect(wrapper.state("containerDisplay")).toEqual("")
        wrapper.instance().switchContainer("hello")
        expect(wrapper.state("containerDisplay")).toEqual("hello")
    })
    it("should change the container info when function is invoke", () => {
        expect(wrapper.state("peoplesinfo")).toEqual([])
        wrapper.instance().saveContainerInfo("peoplesinfo", [1,2,3])
        expect(wrapper.state("peoplesinfo")).toEqual([1,2,3])
    })
})