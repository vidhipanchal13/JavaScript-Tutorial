// let user = {
//     name: "Foo",
//     age: 23,
//     address: "Foo Bar Street"
// }

// function editProfile(name,age,address){
//     user.name = name;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// let updated_user = editProfile("Bar", 33, "Bar Foo Street");
// console.log(updated_user)

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}
let max = {
    value: 0,
    key: '',
    skills: []
}

// console.log(users['Asab']);
for (const user in users) {
    if (Object.hasOwnProperty.call(users, user)) {
        const element = users[user];
        if(element.skills.length > max.value){
            max.value = element.skills.length
            max.key = user
            max.skills = element.skills
        }
    }
}

setTimeout(() => {
    console.log(max)
}, 3000);
