let mixedFruitsEl = document.getElementById("mixed-fruits-el");
let appleEl = document.getElementById("apple-el");
let orangeEl = document.getElementById("orange-el");

function sortFruit(buttonEl){
    console.log(buttonEl);
    console.log(buttonEl.innerHTML);
    buttonEl.style.display = "none";
    if(buttonEl.innerHTML == '🍎'){
        // console.log("apple");
        appleEl.textContent += '🍎';
    }
    else{
        // console.log("orange");
        orangeEl.textContent += '🍊';
     
    }
}