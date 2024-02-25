import {bubbleSort} from './bubbleSort.js';
import { generateRandomArray, getArraySize} from './algorithmsHelper.js';
import { insertionSort } from './insertionSort.js';
import {quickSort} from './quickSort.js';
import { displayArr } from './domChanger.js';
let choosenAlgo = document.querySelectorAll(".algo");
export let numbers = [];
export let arrContainer = document.querySelector(".arr");
let submitBtn = document.querySelector(".submitBtn");
let submitInput = document.querySelector(".submitInput");
let randomBtn = document.querySelector(".random");
let algorithms = document.querySelectorAll(".algo");
let inputArr = document.querySelector(".inputArr");
let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn")
let warning = document.querySelector(".warning");
export let runFlag=0;


export function modifyNumbers(newNumbers){
    numbers=[...newNumbers];
}

export function modifyRunFlag(newFlag){
    runFlag=newFlag;
}

generateRandomArray(getArraySize());
displayArr();

randomBtn.onclick = function () {
    if(runFlag==1)
        randomBtn.preventDefault();
    generateRandomArray(getArraySize());
    arrContainer.innerHTML="";
    displayArr();
    runFlag=0;
}

choosenAlgo.forEach(child=>{
    child.onclick = function () {
        choosenAlgo.forEach(algo=>{
            if(algo.classList.contains("active"))
                algo.classList.remove("active");
        })
        child.classList.add("active");
        if(runFlag==0)
            displayArr();
    }
});



submitBtn.onclick = function () {
    let x;
    if(runFlag==1){
        submitBtn.preventDefault();
    }
        
    else{
        algorithms.forEach(async algo=>{
            if(algo.classList.contains("active")){
                if(algo.classList.contains("bubble"))
                    bubbleSort();
                else if(algo.classList.contains("insertion"))
                    insertionSort();
                else if(algo.classList.contains("quick")){
                    await quickSort(numbers, 0, numbers.length -1);
                    runFlag=0;
                    console.log(numbers);
                }
                else if(algo.classList.contains("merge")){
                    arrContainer.innerHTML="";
                    let coming = document.createElement("div");
                    coming.innerHTML="Coming Soon";
                    coming.style.cssText="color:white; font-size:80px ;font-weight:900"
                    arrContainer.appendChild(coming);
                    runFlag=0;
                    x=1;
                }
            }
        })
    if(x!=1)
        runFlag=1;
    }

}

submitInput.onclick = function (){
    let counter=input.value;
    let flag = checkInput(counter);
    if(flag==0){
        input.value="";
        arrContainer.innerHTML="";
        displayArr();
        runFlag=0;
        inputArr.classList.add("disable");
        warning.classList.add("disable");
    }
}


export let checkInput = function (input) {
    let flag=0;
    for(let i=0;i<input.length;i++){
            if(isNaN(parseInt(input[i]))&&input[i]!=","){
                warning.classList.remove("disable");
                warning.innerHTML="Please Enter Numbers Only i.e : 15,20,52,62,2,45,1";
                flag=1;
                break;
            }
        }
        modifyNumbers("")
        modifyNumbers(input.split(","));
        numbers.forEach(num=>{
            if(num>9999){
                warning.classList.remove("disable");
                warning.innerHTML="you can enter a number <= 9999 only";
                flag=1;
            }
        });

        if(numbers.length>20){
            warning.classList.remove("disable");
            warning.innerHTML="you can enter maximum 20 number";
            flag=1;
        }
    return flag;
}

input.addEventListener("keypress",function (event){
    if(event.keyCode==13)
        submitInput.click();
})

addBtn.onclick = function () {
    inputArr.classList.remove("disable");
    input.focus();
}

