import React from "react";

type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType



beforeEach(() => {
    users = {
        '21': {id: 21, name:"Rustam"},
        '742': {id: 742, name:"Timur"},
        '543': {id: 543, name:"Daler"},
        '1': {id: 1, name:"Dima"}
    }
})

test("should update corresponding user", () => {
    users['1'].name = 'Dmitry'

    expect(users['1']).toEqual({id: 1, name:"Dmitry"} )
})
test("should delete corresponding user", () => {
    delete users['1']

    expect(users['1']).toBeUndefined()
})