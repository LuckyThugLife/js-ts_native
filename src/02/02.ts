// @ts-ignore


type TechType = {
    id: number
    title: string
}

type LocalCityType = {
    title: string
    country: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

 export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>

}

 export const student: StudentType = {
    id: 1,
    name: "Rustam",
    age: 34,
    isActive: false,
    address: {
        streetTitle: "Istaravshan 13",
        city: {
            title: "Dushanbe",
            country: "Tajikistan",
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]

}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2])