interface User {
    name: string,
    id: number
}

const user: User = {
    name: "Mike",
    id: 0
}

// Generics

type UserType = "admin" | "user"
type ArrayLevel = 1 | 2 | 3

interface CustomUser<UserType, ArrayLevel> {
    nickname: string;
    age: number;
    type: UserType;
    level: ArrayLevel;
}

const customUser: CustomUser<UserType, ArrayLevel> = {
    nickname: "Nothimg",
    age: 25,
    type: "user",
    level: 3
}

console.log(customUser)