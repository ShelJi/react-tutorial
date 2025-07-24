// without class
let user1q = { firstName: "John", lastName: "Doe", age: 25 };
let user2q = { firstName: "Jane", lastName: "Smith", age: 30 };

function greetUser(user: { firstName: string; lastName: string }) {
	return `Hello, ${user.firstName} ${user.lastName}`;
}

function getUserAge(user: { age: number }) {
	return user.age;
}

console.log(greetUser(user1q));
console.log(getUserAge(user1q));

console.log(greetUser(user2q));
console.log(getUserAge(user2q));
