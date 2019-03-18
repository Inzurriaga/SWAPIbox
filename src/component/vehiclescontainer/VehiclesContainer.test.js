import React from "react"
import { shallow } from "enzyme"
import VehiclesContainer from "./VehiclesContainer"

const mockVehicleinfo = []
const mockData = []

describe("vehicles_container",() => {
let wrapper;
beforeEach(() => {
    wrapper = shallow(
        <VehiclesContainer vehicleinfo={mockVehicleinfo}/>
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
    vehicles: [],
    error: ""
})
});
it.skip("should call fetch with the correct url", () => {
const url = "https://swapi.co/api/vehicles/"
wrapper.instance().componentDidMount()
expect(fetch).toHaveBeenCalledWith(url)
});
it("should change state when fetch is resolved", async () => {
expect(wrapper.state("vehicles")).toEqual([])
await wrapper.instance().componentDidMount()
expect(wrapper.state("vehicles")).toEqual([])
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