import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairedHouse, toFireStuff, toHireStuff} from "./03";


let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildetAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                buildetAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildetAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            },

        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, stuffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE STATION", budget: 500000, stuffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            },
        ],
        citizensNumber: 1000000

    }
})



test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test("Budget should be changed for FIRE STATION", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("House should be repaired", () => {
    repairedHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test("Stuff should be increased", () => {
    toFireStuff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].stuffCount).toBe(180)
})

test("Stuff should be repaired", () => {
    toHireStuff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].stuffCount).toBe(220)
})

test("Greating message should be corrected for city", () => {


    expect(createMessage(city)).toBe("Hello New York cityzens. I want you be happy. All 1000000 men")
})