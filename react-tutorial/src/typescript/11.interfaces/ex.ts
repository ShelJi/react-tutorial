 interface User {
    firstName: string;
    lastName: string;
    age?: number;
    middleName?: string
}

function greetUser(user: User) {
    return `Hello ${user.firstName} ${user.lastName}`;
}

function logUserDetails(user: User) {
    console.log(`User: ${user.firstName} ${user.middleName} ${user.lastName}, Age: ${user.age}`)
}

let user1 = {firstName:"John", lastName: "Doe", middleName:"Francis", age: 25 };
let user2 = {firstName:"ee", lastName: "spider" };

console.log(greetUser(user2));
logUserDetails(user1);