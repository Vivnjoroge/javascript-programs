/* console.log("Hello");

window.alert("This is an alert") */

/* document.getElementById("myH1").textContent='Hello';
document.getElementById("myP").textContent='I like pizza!'; */
 
//This is a comment
/* This
is 
a comment*/
//Variables
//Containers that stores a value

 //Declaration let x;
//Assignment x =100;

/* let age=25;
let price = 10.99;
let gpa=3.78; */

/* let firstName= "Vivian";
let email = "vivian@gmail.com";

console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is ${firstName}`);
console.log(`Your email is ${email}`); */
/* console.log(`You are ${age} years old`);
console.log(`The price is ${price} `);
console.log(`Your gpa is ${gpa} `); */

//Booleans - TRUE OR FALSE
/* let online = true;
console.log(typeof online);
console.log(`Vivian is ${online}`); */

/* let fullName = "Vivian Njoroge";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`; */

//Arithmetic Operations
//let students = 30;
/* students = students+ 1; */
/* students = students- 1;
students = students * 2;
students = students / 2; */
/* students = students **2;
students = students % 3; */


//Augment Assignment OPOerators
//students += 1;
//students -= 1;
//students *= 2;
//students /= 1;
//students **= 2;

//students++;
//students--;

//console.log(students);
//How to accept user input
//1.EASY WAY = window prompt
//2.PROFESSIONAL WAY = HTML textbox

/* let username;
username = window.prompt("Whats your username?");
console.log(username); */
/* document.getElementById("mySubmit").onclick= function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`Hello ${username}`
} */
//Type Conversion = change the datatype of a value to another(strings,numbers,booleans)
/* let age = window.prompt("How old are youy?");
age = Number(age);
age+=1
console.log(age,typeof age); */
/* let x ="pizza";
let y ="pizza";
let z ="pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z ); */

//Constants - a variable that can't be changed
/* const PI = 3.14159;
let radius;
let circumference; 

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";


}
 */
//Math - built-in object that provides a collection of properties and methods
/* let x = 3.99
let y = 2;
let z = 5 */
//z=Math.round(x);
//z=Math.floor(x);
//z=Math.ceil(x);
// z=Math.trunc(x);
//z=Math.pow(x,y);
//z=Math.sqrt(x);
//z=Math.log(x);
//z=Math.sint(x);
//z=Math.cos(x);
//z=Math.tan(x);
//z=Math.abs(x);
//z=Math.sign(x);
//let max = Math.max(x,y,z);
//let min = Math.min(x,y,z);
//console.log(max);
//console.log(min);

//IF STATEMENTS = if a condition is true,execute some code,if not,do something else.
/* const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
         resultElement.textContent =`You are too old to enter this site`;
    }
    else if(age == 0 ){
        resultElement.textContent =`You were just born`;
    }
    else if(age >= 18){
        resultElement.textContent =`You are old enough to enter this site`;
    }
    else if(age < 0){
        resultElement.textContent =`You cant be 0`;
    }
    else {
        resultElement.textContent =`You must be 18+ to enter this site`;
    }

}
 */
//Checked = Property that determines the checked stste of an HTML checkbox or radio button element
/* const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent=`You are subscribed`;
    }else{
        subResult.textContent=`You are not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent=`You are paying with Mastercard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent=`You are paying with Paypal`;
    }
    else{
        paymentResult.textContent=`You must select a payment type`;
    }
}
 */
 //Ternary Operator = a shortcut to if() and else() statements helps to assign a variable based on a condition ? codeIfTrue: codeIfFalse;
 //let age = 21;
 //let message = age >= 18 ? "You're an adult" : "Your a minor";
 //console.log(message);

 //let time = 16;
 //let greeting = time<12 ? "Good morning" : "Good afternoon";
 //console.log(greeting);

 //let isStudent = true;
 //let message = isStudent ? "You are a student" : "You are not a student";
 //console.log(message);

 //let purchaseAmount = 125;
 //let discount = purchaseAmount >= 100 ? 10 : 0;
 //console.log(`Your total is $${purchaseAmount-purchaseAmount*(discount/100)}`);

 //SWITCH STATEMENTS= can be efficient replacement to many else if statements
 /* let day = 5;

 switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday")       
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
        

 } */

/* let testScore = 60;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
        
    default:
        letterGrade = "F";
}
console.log(letterGrade); */

//String Methods - allow you to manipulate and work with text (strings)

/* let userName = "Vivian"; */
/* console.log(userName.charAt(1));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length); */
//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();
//let result = userName.startsWith(" ");
//let result = userName.endsWith(" ");
/* let result = userName.includes(" ");
if(result){
    console.log("Your username can't begin with ' '");
}else{

   console.log(userName);
} */
/* let phoneNumber = "123-456-7890"; */
/* 
phoneNumber = phoneNumber.replaceAll("-",''); */
//phoneNumber = phoneNumber.padStart(15,"0");
/* phoneNumber = phoneNumber.padEnd(15,"0");
console.log(phoneNumber); */

//STRING SLICING = creating a substring from a portion of another string
//string.slice(start,end  )
//const fullName ="Vivian Nyokabi";
/* let firstName = fullName.slice(0,6);
let lastName = fullName.slice(7,14);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-7); */

/* let firstName = fullName.slice(0,fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+ 1);
console.log(firstName);
console.log(lastName) */;

/* const email = "viviannjoroge91@gmail.com";
let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension); */

//Method Chaining = calling one  method after another in one continuous line of code
/* let username = window.prompt("Enter your username:");
username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLocaleLowerCase();
console.log(username);
 */

//LOGICAL OPERATORS = used to combine or manipulate boolean values(true or false)
//AND = && OR = || NOT = !
//const temp = 30;
/* if(temp > 0 && temp <= 30){
    console.log("The weather is good");
}else{
    console.log("The weather is bad");
} */
/* if(temp <= 0 || temp > 30){
    console.log("The weather is bad");
}else{
    console.log("The weather is good");
} */
/* const isSunny = false;
if(!isSunny){
    console.log("It is sunny");
}else{
    console.log("It is cloudy");
} */

// = assignment operator
// == comparison operator(compare if values are equal)
// === strict equality operator(compare if values & datatype are equal)
// != Inequality operator
//!== strict inequality operator

//WHILE LOOPS = repeat some code WHILE some condition is true;
/* let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "myUsername" && password =="myPassword"){
        loggedIn = true;
        console.log("You are logged in !");
        }else{
            console.log("Invalid credentials!Please try again");
        }
}
 */

//FOR LOOPS = repeat some block of code for a limited amount of times
/* for (let i =0; i<=2; i++){
    console.log(i);

} */

//  FUNCTIONS = A section of reusable code.Declare the code once,use it whenever you want.Call the function to execute thta code
/*  function happyBirthday(username,age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old`);
 }
 happyBirthday("Vivian",21); */

 function add(x,y){
    return x+y;
 }
 function subtract(x,y){
    return x-y;
 }
 function multiply(x,y){
    return x* y;
 }
 function divide(x,y){
    return x/y;
 }
 //console.log( multiply(2,3));
 function isEven(number){
    return number % 2 === 0 ? true:false;
 }
   /*  if(number %2 === 0){
        return true;
    }else{
        false
    }
  */
/* function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }

}
 console.log(isValidEmail("vivian@gmail.com")); */

 //VARIABLE SCOPE = where a variable is recognized and accessible (local vs global)

//ARRAYS = a variable like structure that can hold more than one value
/* let fruits = ["apple","banana","orange"];
for(let i =0; i< fruits.length; i++){
    console.log(fruits[i]);
} */
/* for each loop to display arrays */
/* for(let fruit of fruits){
    console.log(fruit);
} */
//fruits.sort().reverse();
//fruits.push("coconut");//add an array to the end
//fruits.pop();//remove an array from the end
//fruits.unshift("grapes");//add an array tot he start
//fruits.shift();// remove an array at the start
//console.log(fruits[0]);

//let numOfFRuits = fruits.length;//get the length of an array
//let index = fruits.indexOf("apple");
//console.log(numOfFRuits);
//console.log(index);

//SPREAD OPERATOR == ... allows an iterable such as an array or string to be expanded into separate elements(unpacks the elements) 
/* let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

let username = "Vivian Njoroge";
let letters = [...username].join("-")

let fruits = ["apple","orange","banana"];
let vegetables = ["carrots","celery","potatoes"];

let foods = [...fruits,...vegetables,"eggs","milk"];

console.log(foods); */

//REST PARAMETERS= (...rest) allow a function to work with a variable 
//spread = expands an array into separate elements
//rest = bundles separate elements into an array

/* function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "fries";
const food3 = "chicken";
const food4 = "hotdog";

//openFridge(food1,food2,food3,food4);
const foods = getFood(food1,food2,food3,food4);
console.log(foods); */

/* function sum(...numbers){
      let result =0;
      for(let number of numbers){
        result += number;
      }
      return result;
}

function getAverage(...numbers){
    let result =0;
    for(let number of numbers){
      result += number;
    }
    return result/numbers.length;
}
//const total = sum(1,2);
const total = getAverage(76,90,89,95,88,99);
console.log(`Your total is ${total}`); */
/* function combineStrings(...strings){
    return strings.join(" ");

}
 const fullName = combineStrings("Mr","Tom","Kinyan");
 console.log(fullName); */

//CALL BACKS = Function that is passed as an argument to another function
//Used to handle asynchronous operations:
//1.Reading a file
//2.Network requests
//3.Interacting with databases
//Hey,when you're done,call tgis next
/* sum(displayPage,1,2);

function sum(callback,x,y){
    let result = x+y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent = result;
} */

//forEach() = method used to iterate over the elements of an array and apply a specified function(callback) to each element
//array.forEach(callback)
/* let numbers = [1,2,3,4,5];

numbers.forEach(square);
numbers.forEach(display);

function double(element,index,array){
    array[index] = element * 2;

}


function triple(element,index,array){
    array[index] = element * 3;

}

function square(element,index,array){
    array[index] = Math.pow(element,2);

}
function display(element){
    console.log(element);

} */
/* let fruits =["apple","orange","coconut"];
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}
function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element){
    console.log(element);
} */

// .map() = accepts a callback and applies that function to each element of an array,then returns a new array

/* const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
} */
/* 
const students = ["Tom","Nelly","Rachael","Vivian"];
const studentsCapitalize = students.map(capitalize);
console.log(studentsCapitalize);


function upperCase(element){
    return element.toUpperCase();
}
function capitalize(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
} */

/* const dates =["2024-1-10","2025-9-10","2024-5-10"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
} */

// .filter() = creates a new array by filtering out elements
/* let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}
 */

/* const ages = [16,17,18,18,19,20,60];
const adults = ages.filter(isAdult);
const children = ages.filter(isCHild)
console.log(children);

function isAdult(element){
    return element >=18;
}
function isCHild(element){
    return element <=18;
} */

/* const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
console.log(longWords);

function getShortWords(element){
    return element.length <=6;
}
function getLongWords(element){
    return element.length >6;
} */

//.reduce() = reduce the elements of an array to a single value 
/* const prices = [5,30,10,25,15,20];
const total = prices.reduce(sum);
console.log(`${total}`);

function sum(accumulator,element){
    return accumulator + element;
} */

/* const grades = [75,50,90,80,65,95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);
console.log(maximum);
console.log(minimum);

function getMax(accumulator,element){
    return Math.max(accumulator,element);
}
function getMin(accumulator,element){
    return Math.min(accumulator,element);
} */

//FUNCTION DECLARATION = define a reusable block of code that performs a specific task
/* function hello(){
    console.log("Hello");
} */
//FUNCTION EXPRESSIONS = a way to define functions as values or variables
/* const hello = function (){
    console.log("Hello");
}
hello(); */

/* const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element,2);
});
const cube = numbers.map(function(element){
    return Math.pow(element,3);
});
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
const total = numbers.reduce(function(accumulator,element){
    return accumulator + element;

});

console.log(total);
 */

//ARROW FUNCTIONS = a concise way to write function expressions good for simple functions that yoy use only once(parameters) => some code
/* const hello = (name,age) => {console.log(`Hello ${name}`)
                          console.log(`You are ${age} years old`)};
hello("Vivian",21); */
/* setTimeout( () => console.log("Hello"),3000);
 */
/* const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element,2));
const cubes = numbers.map((element) => Math.pow(element,3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator,element) => accumulator+element);
console.log(total); */ 

//OBJECTS = A collection of related properties and/or methods 
//Can represent relaworld objects)people,products,places
//object = {key:value,
              // function()}
/* const person1 ={
    firstName: "Spongebob",
    lastName:"Squarepants",
    age:38,
    isEmployed:true,
    sayHello : function(){console.log("Hi! I'm spongebob")},
    eat:function (){console.log("I'm eating mashed potatoes and steak ")}
}
const person2 ={
    firstName:"Patrick",
    lastName:"Star",
    age:42,
    isEmployed:false,
    sayHello : () => console.log("Hi! I'm Patrick...."),
    eat: () => console.log("I'm eating beef"),


}
person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat(); */
/* console.log(person1.firstName);
console.log(person2.firstName); */

//THIS this = is a reference to the object where THIS is used
//(the object depends on the imediate context)
//person.name = this.name
//DOESNT WORK WITH ARROW FUNCTIONS 
/* const person1 ={
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello:function(){console.log(`Hi! I am ${this.name}`)},
    eat:function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 ={
    name: "Patrick",
    favFood: "Pizza",
    sayHello:function(){console.log(`Hi! I am ${this.name}`)},
    eat:function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat(); */

//CONSTRUCTORS = special method for defining the properties and methods of objects
/* function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function (){console.log(`You drive the ${this.model}`)}
}
const car1 = new Car("Volvo","XC60",2024,"black");
const car2 = new Car("Mercedez","c200",2024,"white");
const car3 = new Car("Mazda","CX5",2024,"white");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);


console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);


console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color); */

//CLASSES = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex,static keyword,encapsulation,inheritance
/* class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Product: ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new Product("Shirt",19.99);
const product2 = new Product("Pants",22.50);
const product3 = new Product("Jeans",100.00);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price(with tax): $${total.toFixed(2)}`); */

//STATIC = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class(class owns anything static not the objects)
/* class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return 2 * this.PI * radius * radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10)); */
/* class User{

    static userCount =0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello,my username is ${this.username}`);
    }
}
const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);

user1.sayHello();
User.getUserCount(); */

//INHERITANCE = allows a new class to inherit properties and methods from an existing class (parent -> child)
//helps with code reusability
/* class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name="fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name="hawk";
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
rabbit.alive = false;

console.log(rabbit.alive);
hawk.eat();
rabbit.run(); */

//SUPER KEYWORD = used in classes to call the constructor or access the properties and methods of a parent(superclass)
//this = this object
//super = the parent

/* class Animal{
    constructor(name,age){
        this.name=name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name}moves at a speed of ${speed}ph`);
    }

}
class Rabbit extends Animal{
  
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;

    }
    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed);
    }

}
class Fish extends Animal{

    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed);
    }
    
    
}
class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;

    }
    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed);
    }
    
}
const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish",2,12);
const hawk = new Hawk("hawk",2,12);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.runSpeed);

rabbit.run();
fish.swim();
hawk.fly(); */

//getter = special method that makes a property readable
//setter = special method that makes a property writeable
//validate and modify a value when reading/writing a property

/* class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth >0){
            this._width = newWidth;
        }else{
            console.error("Width must be a positive number");
        }

    }
    set height(newHeight){
        if(newHeight >0){
            this._height = newHeight;
        }else{
            console.error("Height must be a positive number");
        }

    }
    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }
    get area(){
        return this._width * this._height.toFixed(1);
    }
}

const rectangle = new Rectangle(50,89);
rectangle.width = 90;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area); */

/* class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === 'string' && newFirstName.length >0){
            this._firstName = newFirstName;
    }
    else{
        console.error("First name must be a non-empty string");
    }
}
    set lastName(newLastName){
        if(typeof newLastName === 'string' && newLastName.length >0){
            this._lastName = newLastName;
    }
    else{
        console.error("First name must be a non-empty string");
    }
}

set age(newAge){
    if(typeof newAge === 'number' && newAge > 0){
        this._age = newAge;
}
else{
    console.error("First name must be a non-empty string");
}
}
get firstName(){
    return this._firstName;
}
get lastName(){
    return this._lastName;
}
get fullName(){
    return this._firstName  + " " +   this._lastName;
}
get age(){
    return this._age;
}
}
const person = new Person("Vivian","Njoroge",21);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age); */

//DESTRUCTURING = extract values from arrays and objects,then assign them to variables in a convenient way
// [] = to perform array destructuring
//{} = to perform object destructuring

/* let a =1;
let b = 2;

[a,b] = [b,a];
console.log(a);
console.log(b);

const colors = ["yellow","red","blue","orange","purple"]; */
/* [colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors); */
/* const [firstColor,secondColor,thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); */
//EXTRACT VALUES FROM OBJECTS
/* const person1 = {
    firstName: "Spongebob",
    lastName:"Squarepants",
    age:38,
    job: "Fry cook",
}
const person2 = {
    firstName: "Patric",
    lastName:"Star",
    age:34,
}
const {firstName,lastName,age,job="unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job); */
//DESTRUCTURE IN FUNCTION PARAMETERS
/* function displayPerson({firstName,lastName,age,job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age:${age}`);
     console.log(`job:${job}`);
}
const person1 = {
    firstName: "Spongebob",
    lastName:"Squarepants",
    age:38,
    job: "Fry cook",
}
displayPerson(person1) */

//NESTED OBJECTS = objects inside of other objects.
//Allows you to represent more complex data structures 
//Child object is enclosed by a Parent Object
//Person(Address{},ContactInfo{})
/* const person = {
    fullName: " Spongebob Squarepants",
    age:30,
    isStudent:true,
    hobbies: ["karate","jellyfishing","cooking"],
    address:{
        street:"124 Conch St.",
        city:"Bikini Bottom",
        country:"Int.Water"
    }
} */
/* console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address.country);//use property accessor twice */
/* for(const property in person.address){
    console.log(person.address[property]);
} */
/* class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);

    }
}
class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country

    }
}
const person1 = new Person("Spongebob",30,"124 Conch St.","Bikini Bottom","Int,Waters");
const person2 = new Person("Patrick",35,"124 Conch St.","Bikini Bottom","Int,Waters");
const person3 = new Person("Squidward",45,"126 Conch St.","Bikini Bottom","Int,Waters");

console.log(person1.address.street);
console.log(person3.address.city); */
//WORKING WITH ARRAYS
/* const fruits = [{name: "apple", color:"red",calories:95},
                {name: "orange", color:"orange",calories:45},
                {name: "banana", color:"yellow",calories:105},
                {name: "coconut", color:"white",calories:159},
                {name: "pineapple", color:"yellow",calories:37}]; */
/* console.log(fruits[0].name);
console.log(fruits[1].color);
console.log(fruits[4].calories); */
//fruits.push({name:"grapes",color:"purple",calories:20});
/* fruits.shift(); */
//FOR EACH()
/* fruits.forEach(fruit => console.log(fruit));
fruits.forEach(fruit => console.log(fruit.calories)); */
//MAP()
/* const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitNames);
console.log(fruitColors);
 */
//FILTER ()
/* const yellowFruits = fruits.filter(fruit => fruit.color==="yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(yellowFruits);
console.log(lowCalFruits) */
//REDUCE ()
/* const maxFruit = fruits.reduce((max,fruit) => fruit.calories > max.calories ?
                      fruit:max);
console.log(maxFruit);       

const minFruit = fruits.reduce((min,fruit) => fruit.calories < min.calories ?
                      fruit:min);
console.log(minFruit);   */  

//SORT() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic order,not alphabetical 
//lexicographic = (alphabet + numbers + symbols) as strings
/* let fruits = ["apple","orange","banana","coconut","pineapple"]; */
/* let numbers = [1,10,2,9,3,8,4,7,5,6];
numbers.sort((a,b) => b-a);
console.log(numbers);
 */
/* const people = [{name:"Spongebob",age:30,gpa:3.0},
    {name:"Patrick",age:38,gpa:3.0},
    {name:"Squidward",age:37,gpa:2.0},
    {name:"Sandy",age:22,gpa:4.0}]
people.sort((a,b) => b.name.localeCompare(a.name));
console.log(people); */
 
//SHUFFLING AN ARRAY
//Fisher-Yates algorithm
/* const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
shuffle(cards);
function shuffle(array){
    for (let i = array.length -1 ; i>0; i++){
        const random = Math.random() * (i+1);
        [array[i],array[random] = array[random],array[i]];
    }
}
console.log(cards */

//DATE OBJECTS = Objects that contain values that represent dates and times
//These date objects can be changed and formatted
/* const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

date.setFullYear(2025);
date.setMonth(0)

console.log(date); */
/* console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);
 */

//CLOSURE = A function defined inside of another function,the inner function has access to variables and scope of the outer function.
//Allow for private variables and state maintenance
//Used frequently in JS Frameworks: React,vue,Angular
//Private var example:
/* function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}

outer(); */
//State maintenance example:
/* function createCounter(){
     let count =0;

function increment(){
    count ++;
    console.log(`Count increased to ${count}`);
}
function getCount(){
    return count;
}
return{increment,getCount};

}
const counter = createCounter();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`); */
/* function createGame(){
    let score =0;
function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);  
}
function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);  
}
function getScore(){
    return score;
}
 return {increaseScore,decreaseScore,getScore};

}
const game = createGame();
game.increaseScore(15);
game.decreaseScore(5); */

//setTimeout() = Function in Javascript that aloows you to schedule the execution of a function after an amount of time(milliseconds)
//Times are approximate (Varies based on the workload of the Javascript runtime env.)
//setTimeout(callback,delay);
//clear Timeout(timeoutId) = can cancel a timeout before it triggers
/* function sayHello(){
    window.alert("Hello");
}
setTimeout(sayHello,3000); */
/* setTimeout(function(){window.alert("Hello")},3000); */ // anonymous function
/* setTimeout(() => window.alert("Hello"),3500); */ // arrow function
//Cancel timeout
/* const timeoutId = setTimeout(() => window.alert("Hello"),3000);
clearTimeout(timeoutId); */
/* let timeoutId;
function startTimer(){
   timeoutId =  setTimeout(() => window.alert("Hello"),3000);
}
function clearTimer(){
  clearTimeout(timeoutId);
}
 */let timeoutId;
function startTimer(){
   timeoutId =  setTimeout(() => window.alert("Hello"),3000);
}
function clearTimer(){
  clearTimeout(timeoutId);
}
