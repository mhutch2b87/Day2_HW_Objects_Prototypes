/*
//==========Exercise #1 ===========//
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function Fav_Food(person3){
    for(let i = 0; i < 3; i++){
        console.log(Object.values(person3)[i])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name,age){
    this.name = name;
    this.age =  age;

    this.printInfo = () => {
        console.log(`Persons name is ${this.name} and they are ${this.age} years old`)
    } 

    this.addAge = () => {
        this.age++
    }
}

let Billy = new Person("Billy", 24)
let Andy = new Person("Andy", 23)

for(let i = 0; i < 3 ; i++){
    Billy.addAge()
}

console.log(Billy.printInfo())
console.log(Andy.printInfo())