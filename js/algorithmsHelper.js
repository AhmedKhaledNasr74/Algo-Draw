import { displayArr } from "./domChanger.js";
import {numbers,modifyNumbers,runFlag} from "./main.js";
let Input = document.querySelectorAll("input");
export let generateRandomArray = function (x=0) {
    modifyNumbers([]);
    for (let i = 0; i < (window.screen.width-100)/((window.screen.width/x)+5); i++) {
        numbers.push(Math.floor(Math.random()*window.screen.height +1));
    }
    //console.log(numbers);
}

export let getHeightRatio = function () {
    let max = numbers.reduce((a, b) => Math.max(a, b), -Infinity);
    let ratio=1;
    if(max>626)
        ratio = max/626;
    return ratio;
}

Input[1].oninput = function () {
    getSpeed();
}

export function getSpeed(){
    return (350-Input[1].value);
}

Input[0].oninput = function () {
    generateRandomArray(getArraySize());
    displayArr();
}

export function getArraySize(){
    return(Input[0].value)
}