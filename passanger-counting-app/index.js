// document.getElementById("count").innerText = 5

// let countVar = 0;

// let myAge = 21;
// console.log(myAge)

// let dogAge = 7;
// let myDogAge = dogAge * myAge;
// console.log(myDogAge);


// let bp = 50;
// bp += 50;
// bp -= 75;


// actions we have to do when the inc the count

/*
1/

*/



// function callNum(){
//     console.log(42);
// }


// counting the sum

// callNum();
// function sumOfLap(lap1, lap2, lap3){
//     console.log(lap1+lap2+lap3);
// }

// let lap1 = 23;
// let lap2 = 43;
// let lap3 = 63;

// sumOfLap(lap1, lap2, lap3);


// laps completed using just one variable

// count = 0;
// function lapsCountIncrementer(){
//     count++;
//     console.log(count);
// }


// lapsCountIncrementer();
// lapsCountIncrementer();
// lapsCountIncrementer();
// lapsCountIncrementer();


// let name = "Gouri"
// let greeting = "Hi My name is";

// let myGreeting = name + greeting;

let count = 0;

let countVar = document.getElementById("count-var");
let saveEl = document.getElementById("save-el");



function increment(){
    count++;
    countVar.textContent = count;
    // console.log(count); 
}   
console.log("");



// to write it back to the html file we can use getElementbyId
 
function save(){

    console.log(saveEl);
    let countStr = ` ${count} - `;

    saveEl.textContent += countStr;
    
    console.log(count);

    count = 0;
    countVar.textContent = count;
} 



    
