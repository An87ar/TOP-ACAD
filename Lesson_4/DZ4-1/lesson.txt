/*-------------------------*/
// function sayHi(){
//     alert('hello')
// }
// sayHi()

/*-------------------------*/
// Funcrion Expression

// let sayHi = function(){
//     alert('Hello')
// }
// sayHi()

/*-------------------------*/
// Рекурсия
// function plus1(number){
//     number += 10
//     alert(number)
//     if(number < 220){
//         plus1(number + 20)
//     }
// }
// plus1(0)

/*-------------------------*/

// let sum2 = (arg1, arg2) => {
//     alert(arg1 + arg2)
// }

// sum2()

/*-------------------------*/

// let user1 = new Object();
// let user2 = {};

// let user = {
//     name: 'Igor',
//     age: 30,
//     children:{
//         name: "Vadim",
//         age: 2,
//         children:
//          {
//             name: "Egor"
//         }
//     }
// }

// // alert(user.name)
// user?.name
// alert(user['name'])

/*-------------------------*/

// let user = {}

// let name = prompt('what is your name?')

// user["name"] = name // or -> user.name = name

// // alert(JSON.stringify(user))

// let age = prompt('how old are you?')

// user.age = age

// alert(JSON.stringify(user))


/*-------------------------*/

// let user = {
//     name: 'Igor',
//     age: 30
// }

// for (let key in user){
//     alert(key)
//     alert(user[key])
// }

/*-------------------------*/

// const user = {
//     name: 'Igor',
//     age: 30
// }

// alert(JSON.stringify(user))

// user.firstName = 'Ivanov'

// alert(JSON.stringify(user))

/*-------------------------*/
// Object copy

/*
let object1 = {name: 'Test1'}

let object2 = {} // то же самое что и -> let object2 = Object.assign({}, object1)

for(let key in object1){
    object2[key] = object1[key]
}
*/

/*---------------------------------*/
// this

// let user = {
//     name: 'Jhon',
//     age: 38,
//     sayHi() {
//         console.log(this.age)
//     }
// }

// user.sayHi()

/*---------------------------------*/
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack")
// console.log(user)

/*---------------------------------*/
// Обьект Date

// let now = new Date();
// console.log(now)









