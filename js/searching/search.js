import { checkInput } from "./handleInput.js";
import {generateRandomArr,resetArr,getSpeed} from "./searchingAlgoHelper.js";
import { checking, reset, success } from "./domChanger.js";

let submitBtn = document.querySelector(".submitBtn");
let submitInput = document.querySelector(".submitInput");
let randomBtn = document.querySelector(".random");
let customeAlert = document.querySelector(".alert");
let input = document.querySelector(".input");
let items = document.querySelector(".items");
let inputArr = document.querySelector(".inputArr");
let warning = document.querySelector(".warning");
let choosenAlgo = document.querySelectorAll(".algo");
let key = document.querySelector(".key");
choosenAlgo.forEach((child) => {
    child.onclick = function () {
        choosenAlgo.forEach((algo) => {
            if (algo.classList.contains("active")) algo.classList.remove("active");
        });
        child.classList.add("active");
    };
});

submitInput.onclick = function () {
    resetArr();
    if (!checkInput(input.value)) {
        items.innerHTML = "";
        let numbers = input.value.split(",");
        console.log(numbers);
        numbers.forEach((element) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(element));
            li.classList.add("item");
            items.appendChild(li);
        });
        input.value = "";
        inputArr.classList.add("disable");
        warning.classList.add("disable");
    }
};

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

let linearSearch = async function () {
    let flag = 0;
    let key = document.querySelector(".key").value;
    await timer(500);
    let array = document.querySelectorAll(".item");
    for (let i=0;i<array.length;i++) {
        await checking(i,i,array,"linear");
        if (array[i].innerHTML == key) {
            flag = 1;
            success(i,i,array);
            break;
        }
        await outOfSearch(i,i,array);
    }
    return flag;
};

let sortForSearching = function () {
    let array = document.querySelectorAll(".item");
    let numbers = [];
    array.forEach(element =>{
        numbers.push(+element.innerHTML);
    });
    numbers.sort(function(a,b){return a-b});
    for (let i = 0; i < array.length; i++) {
        array[i].innerHTML=numbers[i];
    }
}

let binarySearch = async function () {
    let flag = 0;
    let array = document.querySelectorAll(".item");
    sortForSearching();
    await timer(1000);
    let key = document.querySelector(".key").value;
    let left = 0,right = array.length - 1,middle;
    while (left <= right) {
        await checking(left,right,array,"binary");
        await reset(left,right,array);
        middle = Math.floor((left + right) / 2);
        if (+array[middle].innerHTML < +key) {
            outOfSearch(left,middle,array);
            left = middle + 1;
        }
            
        else if (+array[middle].innerHTML > +key){
            outOfSearch(middle,right,array);
            right = middle - 1;
        }
        else {
            flag = 1;
            break;
        }
        await timer(getSpeed());
    }
    if(flag)
        success(middle,middle,array);
    return flag;
};


let outOfSearch = async function (left,right,array) {
    
    for(let i=left;i<=right;i++){
        array[i].style.backgroundColor="#023b3d";
        array[i].style.filter="blur(1   px)";
        array[i].style.textDecoration="line-through";
        array[i].style.transform = 'scale(1)'
        array[i].style.border='none';
        //array[i].style.display="none";
    }
    await timer(getSpeed());
}


submitBtn.onclick = async function () {
    resetArr();
    let flag = 0;
    if(key.value.length!=0){
        for (const child of choosenAlgo) {
            if (child.classList.contains("active")) {
                if (child.classList.contains("linear"))flag = await linearSearch();
                else flag = await binarySearch();
            }
        }
        if (!flag) customeAlert.classList.remove("disable");
    }
    else window.alert("please enter number");
    
    
};


randomBtn.onclick = generateRandomArr;
