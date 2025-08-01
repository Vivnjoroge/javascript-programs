/* const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count =0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent=count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent=count;
}
resetBtn.onclick = function(){
    count=0;
    countLabel.textContent=count;
} */
//RANDOM NUMBER GENERATOR
/* const min =30;
const max = 100;

let randomNum = Math.floor(Math.random()*(max-min)) + min;
console.log(randomNum); */

/* const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max =6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random ()* max) +min;
    randomNum2 = Math.floor(Math.random ()* max) +min;
    randomNum3 = Math.floor(Math.random ()* max) +min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
 */

// NUMBER GUESSING GAME
const minNum =1;
const maxNum= 100;
const answer = Math.floor(Math.random() * (maxNum-minNum) +minNum);

let attempts =0;
let guess;
let running= true;

while(running){
    guess = window.prompt(`Guess a number between${minNum} - ${maxNum}`);
    guess = Number(guess);
   if(isNaN(guess)){
    window.alert("Please enter a valid number");
   }else if(guess < minNum || guess > maxNum){
    window.alert("Enter a no within the range");
   }
   else{
    attempts++;
    if(guess < answer){
        window.alert("Too low try again");
    }
   else if(guess > answer){
    window.alert("Too high try again");
   }
   else{
    window.alert(`CORRECT! The anser was ${answer}.It took you ${attempts} attempts`);
    running = false;
}
   }
   }
    