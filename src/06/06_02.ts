import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
  return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export const createMessage = (houses: Array<HouseType>) => {
    let callbackfn = (h: HouseType) => `Hello guys from ${h.address.street.title}`;
    let newArray = houses.map(callbackfn);
    return newArray
}


