function greeter(person) {
    return "hello" + person;
}
var user = "lele";
console.log(greeter(user));
function greeter2(person) {
    return greeter(person);
}
// let user2=[0,1]
console.log(greeter2(user));
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user2 = new Student("Jane", "M.", "User");
console.log(greeter3(user2));
//# sourceMappingURL=ts_demo1.js.map