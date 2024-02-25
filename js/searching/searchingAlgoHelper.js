
let items = document.querySelector(".items");
let customeAlert = document.querySelector(".alert");
let range = document.querySelector("#speed");
export let generateRandomArr = function () {
    items.innerHTML="";
    let numbers = [];
    for (let i = 0; i < 10; i++) numbers.push(Math.floor(Math.random(0,1)*20));
    numbers.sort(function(a,b){return a-b});
    console.log(numbers);
    displayArr(numbers);
}


let displayArr = function (numbers) {
    numbers.forEach(element => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        li.classList.add("item");
        items.appendChild(li);
    });
}

export let resetArr = async function () {
    let array = document.querySelectorAll(".item");
    array.forEach(element => {
        element.style.transform = 'scale(1)';
        element.style.outline = 'none';
        element.style.backgroundColor="#65bbca";
        customeAlert.classList.add("disable");
        element.style.filter="blur(0px)"
        element.style.textDecoration="none";
    });
    customeAlert.classList.add("disable");
    
}

range.oninput = function () {
    getSpeed();
}

export function getSpeed(){
    return (800-range.value);
}