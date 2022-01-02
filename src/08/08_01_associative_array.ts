import React from "react";



export const usersObj = {
    '0': "Rustam",
    '1': "Timur",
    '2': "Daler",
    '3': "Dima"
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

 const users: UsersType = {
    '21': {id: 21, name:"Rustam"},
    '742': {id: 742, name:"Timur"},
    '543': {id: 543, name:"Daler"},
    '1': {id: 1, name:"Dima"}
}

//users[1]

var user = {id: 100500, name: "igor"}

users[user.id] = user
delete users[user.id]
users[user.id].name = "Vitya"

export const usersArray = [
    {id: 21, name: "Rustam"},
    {id: 742, name: "Timur"},
    {id: 543, name: "Daler"},
    {id: 1, name: "Dima"}
]

//usersArray.find(u => u.id === 1)
//var usersCopy = [...usersArray.filter(), user]
//var usersArray = usersArray.filter(u => u.id !== user.id)