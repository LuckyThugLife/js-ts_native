import React from "react";


function icreaseAge(u:UserType) {
    u.age++
}

type UserType ={
    age: number
    name: string
    address: {title: string}
}

test("reference type test", () => {
    let user: UserType = {
        age: 34,
        name: "Rustam",
        address: {
            title: "Dushanbe"
        }
    }

    icreaseAge(user)

    expect(user.age).toBe(35)
})

test("array reference test", () => {
    let users = [
        {
        age: 34,
        name: "Rustam"
    },
        {
            age: 35,
            name: "Timur"
        }
    ]

    let admins = users
    admins.push({age: 4, name: "Adam"})



    expect(users[2]).toEqual({age: 4, name: "Adam"})
})

test("value type test", () => {
    let usersCount = 100

    let adminsCount = usersCount
    adminsCount = adminsCount + 1
    adminsCount++

    //expect(users[2]).toEqual({age: 4, name: "Adam"})


})

test("reference type test2", () => {
    let user: UserType = {
        age: 34,
        name: "Rustam",
        address: {
            title: "Dushanbe"
        }
    }

    let addr = user.address

    let user2: UserType = {
        age: 30,
        name: "Fira",
        address: addr
    }

    user2.address.title = "Havai"

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Havai")
})

test("reference type array test2", () => {

    const address = {
        title: "Dushanbe"
    }

    var user: UserType = {
        age: 34,
        name: "Rustam",
        address: address
    }



    let user2: UserType = {
        age: 30,
        name: "Fira",
        address: address
    }

    const users = [user, user2, {age:4, name: "Adam", address: address}]
    const admins = [user, user2]

    admins[0].name = "Mr Rustam"

    expect(users[0].name).toBe("Mr Rustam")
    expect(user.name).toBe("Mr Rustam")
})