import React from "react"
import { shallow } from "enzyme"
import Intro from "./Intro"

const mockData = {
    title: "star"
}

describe("intro", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Intro />
        )
        fetch = jest.fn().mockImplementation(() => Promise.resolve({
            status: 200,
            json: () => Promise.resolve(mockData),
          }));
    });
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot()
    });
    it("should have a default state", () => {
        expect(wrapper.state()).toEqual({
            title: "",
            bodytext: "",
            error: ""
        })
    });
    it("should call fetch with the correct url", () => {
        const url = "https://swapi.co/api/films/1"
        wrapper.instance().componentDidMount()
        expect(fetch).toHaveBeenCalledWith(url)
    });
    it("should change state when fetch is resolved", async () => {
        expect(wrapper.state("title")).toEqual("")
        await wrapper.instance().componentDidMount()
        expect(wrapper.state("title")).toEqual("star")
    })
    it("should change state when fetch is unresolved", async () => {
        fetch = jest.fn().mockImplementationOnce(() => Promise.reject(
            new Error("fetch fail")
          ));
        expect(wrapper.state("error")).toEqual("")
        await wrapper.instance().componentDidMount()
        expect(wrapper.state("error")).toBe("fetch fail")
    })
})