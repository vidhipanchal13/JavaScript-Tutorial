// 1. Override the method you create in Animal class
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

class Dog extends Animal{
    constructor(name,age,color,height){
        super(name,age,color)
        this.height = height;
    }
    getInfo(){
        let nameAge = this.getAnimalInfo();
        return nameAge + " " + this.height;
    }
    saySomething(){
        console.log('Hiiii ..........My Name is sem')
    }
}

let d1 = new Dog('Sem',30,'black',"5'4");
console.log(d1);
console.log(d1.getInfo());
console.log(d1.saySomething());

