// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'Vidhi',
    lastName: 'Panchal',
    incomes: 200000,
    expenses: 100000,
    totalIncome: function () {
        console.log(`${this.incomes}`);
    },
    totalExpense: function() {
        console.log(`${this.expenses}`);
    },
    accountInfo: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    addIncome: function () {
        return `${this.incomes + 35000}`;
    },
    addExpense: function () {
        return `${this.expenses + 50000}`;
    },
    accountBalance: function () {
        return `${this.incomes - this.expenses}`;
    }
};
console.log(personAccount);
console.log(personAccount.firstName);
console.log(personAccount.lastName);
console.log(personAccount.incomes);
console.log(personAccount.expenses);

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome());
console.log(personAccount.addExpense());
console.log(personAccount.accountBalance());




// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

//     const products = [
//   {
//     _id: 'eedfcf',
//     name: 'mobile phone',
//     description: 'Huawei Honor',
//     price: 200,
//     ratings: [
//       { userId: 'fg12cy', rate: 5 },
//       { userId: 'zwf8md', rate: 4.5 }
//     ],
//     likes: []
//   },
//   {
//     _id: 'aegfal',
//     name: 'Laptop',
//     description: 'MacPro: System Darwin',
//     price: 2500,
//     ratings: [],
//     likes: ['fg12cy']
//   },
//   {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
// ]
let max = {

}
function signUp(users) {
    for (const user in users) {
        console.log(user);
        if (Object.hasOwnProperty.call(users, user)) {
            const element = users[user];
            if(users == element.username){
                console.log('hiii');
            }
            
               
            }
        }
    }
    
signUp('Alex');


// 3. Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application



// 4. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

// 5. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.