
import {getSpeed} from "./searchingAlgoHelper.js";
let input = document.querySelector(".input");
let submitInput = document.querySelector(".submitInput");
let addBtn = document.querySelector(".addBtn");
let inputArr = document.querySelector(".inputArr");
addBtn.onclick = function () {
    inputArr.classList.remove("disable");
    input.focus();
}
const timer = (ms) => new Promise((res) => setTimeout(res, ms));
export let checking = async function (left,right,array) {
    
    array[left].style.borderLeft="solid 5px yellow";
    array[right].style.borderRight = "solid 5px yellow";
    

    for (let i = left; i <= right; i++){
        array[i].style.backgroundColor="#10b186";
        array[i].style.transform = 'scale(1.1)';
    }
    array[Math.floor((left+right)/2)].style.backgroundColor="gold";
    array[Math.floor((left+right)/2)].style.transform = 'scale(1.1)';
    
    
    await timer(getSpeed());
}

export let success = function (left,right,array) {
    checking(left,right,array);
    array[left].style.outline = '3px solid yellow';
    array[left].style.border = 'none';
}

export let reset = async function (left,right,array) {
    for (let i = left; i <= right; i++){
        array[i].style.transform = 'scale(1)'
        array[i].style.backgroundColor="#65bbca";
        array[i].style.border = 'none';
    }
    await timer(getSpeed());
}