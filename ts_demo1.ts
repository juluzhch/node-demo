function greeter(person){
    return "hello" +person;
}

let user ="lele";

console.log(greeter(user));


function greeter2(person:string){
    return greeter(person)
}
// let user2=[0,1]
console.log(greeter2(user))

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter3(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = new Student("Jane", "M.", "User");
console.log(greeter3(user2));
