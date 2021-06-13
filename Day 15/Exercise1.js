// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal{
    constructor(name,age,color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
    getAnimalInfo(){
        return this.name + " " + this.age;
    }
}
let a = new Animal('Peacock',25,'Rainbow');
console.log(a.getAnimalInfo());

// 2. Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal{
saySomething(){
    console.log('Hiiii ..........My Name is sem')
}
}

class Cat extends Animal{
    saySomething(){
        console.log('Hiiii ..........My Name is kitty')
    }
}

const d1 = new Dog('sem',15,'Brown');
console.log(d1);
console.log(d1.getAnimalInfo());
console.log(d1.saySomething());

const c1 = new Cat('kitty',9,'Black');
console.log(c1);
console.log(c1.getAnimalInfo());
console.log(c1.saySomething());

