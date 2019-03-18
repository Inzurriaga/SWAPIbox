import React from "react"
import { shallow } from "enzyme"
import VehicleCard from "./Vehiclecard"

const mockdata = {
    name: "car",
    model: "ford",
    vehicle_class: "car",
    passengers: "4"
}


describe("vehicle_card", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <VehicleCard vehicle={mockdata}/>
        )
    })
    it("should match snapshot", () => {
        expect(wrapper).toMatchSnapshot()
    })
})