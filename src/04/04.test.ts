import React from "react";
import {CourseType} from "./04";


test("should take old men older then 90", () => {
    const ages = [23, 32, 54, 100, 90, 12]


    const oldAges = ages.filter(age =>  age > 90)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("should take course chipper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]


    const ChipCourses = courses.filter(course => course.price < 160)
    expect(ChipCourses.length).toBe(2)
    expect(ChipCourses[0].title).toBe("CSS")
    expect(ChipCourses[1].title).toBe("React")

})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Salt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]


    const completedTasks = tasks.filter(task => task.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)

})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Salt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]


    const uncompletedTasks = tasks.filter(task => !task.isDone)
    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)

})

