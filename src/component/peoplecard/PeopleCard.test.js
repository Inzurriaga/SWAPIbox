import React from "react"
import { shallow } from "enzyme"
import PeopleCard from "./PeopleCard"

const mockdata = {
    name: "bob",
    speciesName: "human",
    worldName: "earth",
    population: "300"
}


describe("people_card", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <PeopleCard people={mockdata}/>
        )
    })
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot()
    })
})