import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title:skill
    })


}

export function makeStudentActive(s: StudentType){
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName

}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const repairedHouse = (houseType: HouseType) => {
            houseType.repaired = true
}

export const toFireStuff = (buildings: GovernmentBuildingsType, stuffCountToFire: number) => {
    buildings.stuffCount -= stuffCountToFire
}

export const toHireStuff = (buildings: GovernmentBuildingsType, stuffCountToHire: number) => {
    buildings.stuffCount += stuffCountToHire
}

export function createMessage(props: CityType) {
    // return "Hello "+ props.title +" cityzens. I want you be happy. All "+ props.citizensNumber +" men"
    return `Hello ${props.title} cityzens. I want you be happy. All ${props.citizensNumber} men`
}