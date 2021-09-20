//This is a Typescript representation of an object TYPE:
//const person: {
//    name: string;
//    age: number;
//} = {

//This syntax is the better syntax:
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //This marks a tuple. It has exactly one number and one string
} = {
    name: 'Sergey',
    age: 31,
    hobbies: ['Wargaming', 'Programming'],
    role: [2, 'author']
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

console.log(person.role);