import React from "react"
import { shallow } from "enzyme"
import PeopleContainer from "./PeoplesContainer"

const mockData = [{name: "luke"}, {name: "vader"}]

const mockprop = []

describe("intro", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <PeopleContainer peoplesinfo={mockprop}/>
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
            peoples: [],
            error: ""
        })
    });
    it("should call fetch with the correct url", () => {
        const url = "https://swapi.co/api/people/"
        wrapper.instance().componentDidMount()
        expect(fetch).toHaveBeenCalledWith(url)
    });
    it("should change state when fetch is resolved", async () => {
        expect(wrapper.state("peoples")).toEqual([])
        await wrapper.instance().componentDidMount()
        expect(wrapper.state("peoples")).toEqual(mockData)
    });
    it("should change state when fetch is unresolved", async () => {
        fetch = jest.fn().mockImplementationOnce(() => Promise.reject(
            new Error("fetch fail")
          ));
        expect(wrapper.state("error")).toEqual("")
        await wrapper.instance().componentDidMount()
        expect(wrapper.state("error")).toBe("fetch fail")
    });
    it("should fetch with the array url of species", () => {
        const url = "hello"
        const mockData = []
        fetch = jest.fn().mockImplementationOnce( async () => Promise.resolve({
            status: 200,
            json: () => Promise.resolve(mockData),
          }));
        wrapper.instance().fetchSpeciesInfo([])
        expect(fetch).toHaveBeenCalledWith(url)
    })
    it("should fetch with the array url of species", () => {
        const url = "hello"
        const mockData = []
        fetch = jest.fn().mockImplementationOnce( async () => Promise.resolve({
            status: 200,
            json: () => Promise.resolve(mockData),
          }));
        wrapper.instance().fetchSpeciesInfo([])
        expect(fetch).toHaveBeenCalledWith(url)
    })
})