// 1. Create an empty object called dog
// const dog = {}

// 2. Print the the dog object on the console
// console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

const dog = {
     name: 'oreo',
     color: 'white',
     age: 10,
     getBark: function () {
         return 'woof woof';
     }

}
// 4. Get name, legs, color, age and bark value from the dog object
console.log(`name of dog : ${dog.name}`);
console.log(`color of dog : ${dog.color}`);
console.log(`age of dog : ${dog.age}`);
console.log(`dog says : ${dog.getBark()}`);

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed  = 'animal';
dog.getDogInfo = function () {
    return `${breed}`
}
console.log(dog);