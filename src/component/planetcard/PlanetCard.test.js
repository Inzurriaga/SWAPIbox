import React from "react"
import { shallow } from "enzyme"
import PlanetCard from "./PlanetCard"

const mockdata = {
    name: "earth",
    terrain: "rocking",
    population: "3000",
    residents: []
}


describe("planet_card", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <PlanetCard planet={mockdata}/>
        )
    })
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot()
    })
})