const EventEmmiter = require("events");

class Dog extends EventEmmiter{};

class Food {};

const bone = new Food();

let myDog = new Dog();

myDog
    .on("eat", item => {
        if (item instanceof Food) {
            console.log("Good Dog");
        } else {
            console.log(`let's buy another ${item}`);
        }
    })
    .on("talk", () => {
        console.log("woof woof");
    })
    .on("talk", () => {
        console.log("woof woof woof woof");
    })

myDog.emit("eat","shoe");
myDog.emit("eat",bone);
myDog.emit("talk");

console.log(myDog.eventNames());
myDog.removeAllListeners("talk");
console.log(myDog.eventNames());