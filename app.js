//This is a Typescript representation of an object TYPE:
//const person: {
//    name: string;
//    age: number;
//} = {
//This syntax is the better syntax:
var person = {
    name: 'Sergey',
    age: 31,
    hobbies: ['Wargaming', 'Programming']
};
//This variable is declared as an array of strings
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person.name);
//This for loop is familiar to any JavaScript user:
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    //toUpperCase() method is allowed because we established the array as a sting array
    console.log(hobby.toUpperCase());
    //map() method is not allowed because it's a string array
    //console.log(hobby.map()) // !!! ERROR
}
