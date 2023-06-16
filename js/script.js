//fix the code
// function squared(a
//                 ) {
//        return a*a
// }

// console.log (squared(5));
//jake teh brogrammer code

// loops
//while loops
// let myNumber = 0;
// while(myNumber < 50){
//     console.log(myNumber);
//     myNumber++; //without this, it becomes an endless loop
//do not creat an endless loop
// }

// for loop
// for( let i = 0; i <= 10; i++){
//     console.log(i)

// }
// let name = "zhang"
// for (let i = 0; i < name.length; i++){
//     console.log(name.charAt(i));
// }

// let name = "zhang";
// let counter = 0;
// let myLetter;
// while (counter <= 3){
//     myLetter = name[counter];
//     console.log(myLetter) ;
//     if(counter === 1){
//         counter += 2;
//         continue;
//     }
//     if (myLetter === "n") break;
//     counter++;
// }
// console.log(counter )
// i honestly do not understand this loop thing


//functions with dave gray
// methods === built-in functions
//e.g match methods etc



//  //funcrion declearation syntax
//  function sum(num1, num2){
//     //codes to be executed
//     console.log(num1)
//     console.log(num2)
//     if(num2){
//          return num1 + num2;
//     } else{
//         return num1
//     }

//  }
//  console.log(sum(2, 7 ))

//  //creating reusable codes with functions ....... e.g
// //  function getUserFromEmail(email){
// //     return email.slice(0, email.indexOf("@"))
// //  }
// //  console.log(getUserFromEmail("gofuckyourself@Hell.com"))//this code is very reusable and can be used on several emails

// //  another way to declear a function
// // const getUserFromEmail = function(email){
// //     return email.slice(0, email.indexOf("@"))
// // }

// // console.log(getUserFromEmail("helloworld@codding.com"))
// // this methode is called annonymos functions

// //way 3 of defining a function (arrow function)

// // const getUserFromEmail = (email) => {
// //     return email.slice(0, email.indexOf("@"))
// // }

// // console.log(getUserFromEmail("ilovebreast@codding.com"))

// const toProperCase = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// };

// console.log(toProperCase("isiwat"));

// // to initialize variables in JS
// //var, let, const

// // var x = 1
// // var x = 3
// // console.log(x)  //var has a glitch, it doesnt retun an error when used fro more than one variable unlike let and const

// let x = 12;
//  x = 15
//  console.log(x)

// //  global scope
// // var
// // let
// // const

// // /local scope
// {
//     // let
// }
// function myScope(){
//     // const 
// }

// // so i dont really understand the whole local and global and function and block level scope 


// // arrays 
// const myArrayA = [];
// // now using const means you cant reassign the array but the element inside can be reassigned

// //adding elements to an array
// myArrayA[0] = "johnny";
// myArrayA[1] = 2001;
// myArrayA[2] = "true"

// //refer to the array
// console.log(myArrayA)

// // length property of an Array
// console.log(myArrayA.length)

// // last element of an Array
// console.log(myArrayA[myArrayA.length - 1])
// console.log(myArrayA[2])

// // console.log(myArray[myArray.charAt(myArray.length)]) i guess this diddnt work

// // adding more data to an Array
// myArrayA.push("school") //this add to the end of the Array
// console.log(myArrayA)

// // removing from an Array
// myArrayA.pop() //this removes the last item in the array

// console.log(myArrayA)

// let lastItem = myArrayA.pop() //this retrun the last item on the array to the console
// console.log(lastItem)

// myArrayA.unshift(9000); //this adds to the front of the array

// console.log(myArrayA)

// myArrayA.shift() //this remove the first item on the array


// console.log(myArrayA)
// myArrayA.push("fire")
// console.log(myArrayA)
// myArrayA.unshift("sex")
// console.log(myArrayA)

// //removing from the middle of the array
// // do not use this
// delete myArrayA[2];
// //this doesnt remove the element, it just creates undefined data
// console.log(myArrayA)

// //use thius instead

// myArrayA.splice(1, 1)
// //(1(start at position here), 1(amount of elements to delete))
// console.log(myArrayA)

// // using splice to replace an Element after deleting

// myArrayA.splice(1, 1, 3000)
// console.log(myArrayA)

// //replacing without deleting

// myArrayA.splice(1, 0, 300)
// console.log(myArrayA)

// const myArrayB = [ "A", "B", "C", "D", "E", "F"];

// const newArray = myArrayB.slice(2,6) //this returns elements from the array at a given popsition
// console.log(newArray)


// // const newerArray = anotherArray.reverse(); //this returns the array from back to front
// // console.log(newerArray);

// const newString = myArrayB.join();

// console.log(newString)

// const yourArray = newString.split(",");
// console.log(yourArray)

// const thatArray = myArrayA.concat(myArrayB); //this method joins two different arrays together
// console.log(thatArray)

// const theArray = [...myArrayA,...myArrayB] //this can also be used to join different arrays together instead of concat method
// console.log(theArray)

// const noArray = [myArrayA, myArrayB]
// console.log(noArray)

// // accessing values from nested arrays in 2 && 3 dimentions

//  const eShelfA = ["basketball", "baseball", "i want", "swimming"]
//  const eShelfB = ["football", "tenis", "baccarat"]

//  const cShelfA = ["croptop", "bikini", "your nudes"]
//  const cShelfB = ["i want", "you naked", "thong"]

//  console.log(eShelfA[2])
//  console.log(cShelfA[2])

//  const equpDept = [eShelfA, eShelfB]
//  const clothDept = [cShelfA, cShelfB]
//  console.log(equpDept)
//  console.log(clothDept)
// //  console.log(equpDept && clothDept)

// // seeking items from nested array 2 dimentional
// console.log(equpDept[0][2])
// console.log(clothDept[1][1])

// // accessing items from nested arrays 3 dimentional
// const sportStore = [equpDept, clothDept]
// console.log(sportStore)

// console.log(sportStore[0][0][2])
// console.log(sportStore[1][1][1] )

// const computerChoice = Math.floor(Math.random() * 3 )
// const rpsArray = ["rock", "paper", "scissors"]
// const computer = rpsArray[computerChoice]

// console.log(computer)

// let name = "zhanghudeyjqwiw";
// let counter = 0;
// let myLetter;
// while(counter <=12) {
//     myLetter = name[counter];
//     console.log(myLetter);
//     if (counter === 1){
//         counter += 2;
//         continue;    
//     }
//     counter+=2; 
// }

// objects oriented syntax
//objects come in key value pairs stored in curly braces
const myObj = { name: "zhang" };

const anotherObj = {
    alive: "true",
    age: 25,
    hobbies: ["swimming", "sleep", "eat", "learn"],
    beverages: {
        morning: "coffee",
        afternoon: "junk"
    },

    //objects can also use methodes e.g
    action: function() {
        return `time for ${this.beverages.morning}`;
    }

}

console.log(myObj)
console.log(myObj.name)
console.log(anotherObj)
console.log(anotherObj.hobbies[0])
console.log(anotherObj.beverages.morning)
console.log(anotherObj["alive"])
console.log(anotherObj["beverages"]["afternoon"])
console.log(anotherObj.action())

// const vehicle = {
//     wheels: 4,
//     engine: function() {
//         return "vrooom";
//     }
// }

// const truck = Object.create(vehicle);
// truck.door = 2;
// console.log(truck);
// console.log(truck.wheels); //this is an inheritance property
// console.log(truck.engine())

// const car = Object.create(vehicle)
// car.doors = 4;
// car.engine = function() {
//     return "whoosh!!";
// }

// console.log(car.engine())
// console.log(car.doors)
// console.log(car.wheels)

// const tesla = Object.create(car)
// console.log(tesla)
// console.log(tesla.doors)
// console.log(tesla.engine())
// console.log(tesla.wheels)

// tesla.engine = function() {
//     return "shhhhhhhh"
// }

// console.log(tesla.engine())

const heros = {
    robotics: "tony stark",
    combat: "steve rogers",
    alien: "clark kent",
    kid: "billy batson",
    animal: "peter parker",
    human: "bruce wane"
};

// console.log(Object.keys(heros));
// console.log(Object.values(heros))

// for (let type in heros) {
//     console.log(`on ${type}, its ${heros[type]}`);
// }

// //adding to the object
// heros.royals = "tchala"

// console.log(Object.keys(heros))
// console.log(Object.values(heros))

// //deleting an exixting property
// delete heros.royals;
// //checking for the property
// console.log(heros.hasOwnProperty("royals"))

// console.log(Object.keys(heros))

//destructuring objects

// const { robotics: myVariable, combat: myCombat } = heros;
// console.log(myVariable)
// console.log(myCombat)

const { robotics, combat, alien, kid, animal, human } = heros

console.log(combat)
console.log(human)

function saves({ alien }) {
    return `${alien} super power`
}
console.log(saves(heros))

//JS class

class anime {
    constructor(animeType) {
        // this.age = animeAge;
        this.type = animeType;
        this.genre = "ecchi";
        // this.toppings = []
    }
    getGenre() {
        return this.genre;
    }

    setGenre() {

        }
        // get animeGenre() {
        //     return this.genre;
        // }

    // set animeGenre(animeGenre) {
    //     this.genre = animeGenre
    // }
    // getToppings() {
    //     return this.toppings
    // }

    // setToppings(toppings) {
    //     this.toppings.push(toppings)
    // }

    // watch() {
    //     console.log(`watching a ${this.age} ${this.genre} ${this.type} anime `)
    // }
}

// const myAnime = new anime("pirate", "isekai");
// myAnime.animeGenre = "fire"
// myAnime.watch();
// myAnime.setToppings("toppings")
// myAnime.setToppings("ninjas")
// console.log(myAnime.animeGenre)
// console.log(myAnime.getToppings())