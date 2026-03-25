//1. Write a program to demonstrate call back function.
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayGoodMorning() {
    console.log("GoodMorning! Have a nice day.");
}
greet("Sumit Kumar 191", sayGoodMorning);