//This is a Typescript representation of an object TYPE:
//const person: {
//    name: string;
//    age: number;
//} = {

//This syntax is the better syntax:
const person = {
    name: 'Sergey',
    age: 31,
    hobbies: ['Wargaming', 'Programming']
};

//This variable is declared as an array of strings
let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);

//This for loop is familiar to any JavaScript user:
for (const hobby of person.hobbies) {
    //toUpperCase() method is allowed because we established the array as a sting array
    console.log(hobby.toUpperCase());
    //map() method is not allowed because it's a string array
    //console.log(hobby.map()) // !!! ERROR
}