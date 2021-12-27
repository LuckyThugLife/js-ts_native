import React from "react";

const ages = [23, 32, 54, 100, 90, 12]

const predicate = (age: number) => {
    return age > 90
}
const oldAges = [100]

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150}
]

const ChipPredicate = (course:CourseType) => {
    return course.price > 160

}

const ChipCourses = [
    {title: "CSS", price: 110},
    {title: "React", price: 150}
]