import {CityType} from "./02_02";

let city: CityType

beforeEach(() => {
    city = {
        title: "Dushanbe",
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

// создайте тип CityType
// заполните объект city, чтобы тесты ниже прошли

test("test city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildetAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe("White street")


    expect(city.houses[1].buildetAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe("Happy street")


    expect(city.houses[2].buildetAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe("Happy street")
})

// дополните тест GovernmentBuildingsType
// заполните объект city, чтобы тесты ниже прошли

test("test city should contains hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL")
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].stuffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe("Central Str")


    expect(city.governmentBuildings[1].type).toBe("FIRE STATION")
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].stuffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe("South Str")


})