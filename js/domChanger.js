import {numbers,arrContainer} from "./main.js";
import { getHeightRatio } from "./algorithmsHelper.js";
export const timer = ms => new Promise(res => setTimeout(res, ms))

export let compare = function (i,check) {
    let bars = document.querySelectorAll(".bar");
    bars.forEach(bar=>{
        if(bar.getAttribute("order")==i){
            if(check==1)
                bar.style.backgroundColor="#a993ff";
            else
                bar.style.backgroundColor="#53f3f3";
        }
            
    })
}
//migration
export let progress = function (i,check) {
    let bars = document.querySelectorAll(".bar");
    bars.forEach(bar=>{
        if(bar.getAttribute("order")==i||bar.getAttribute("order")==i+1){
            if(check==1)
                bar.style.backgroundColor="#0cad00";
            else
                bar.style.backgroundColor="#53f3f3";
        }
        
        if(bar.getAttribute("order")==i&&check==0){
            bars[i+1].setAttribute("order",i);
            bars[i].setAttribute("order",i+1);
            bar.parentElement.insertBefore(bars[i+1],bars[i]);
        }
    })
}

export let done = function (i) {
    let bars = document.querySelectorAll(".bar");
    bars.forEach(bar=>{
        if(bar.getAttribute("order")==i){
            bar.style.backgroundColor="#f3f3f3";
        }
    })
}


export let displayArr = function () {
    if (!arrContainer) {
        return;
    }
    arrContainer.innerHTML="";
    let casee;
    numbers.length<=20?casee=1:casee=2;
    for(let i=0;i<numbers.length;i++){
        let contain = document.createElement("div");
        let bar = document.createElement("div");
        let text = document.createTextNode(numbers[i]);
    
        let ratio = getHeightRatio();
        bar.classList.add("bar");
        bar.setAttribute("order",i);
        if(numbers[i]/ratio<1)
            bar.style.height="21px";
        else
            bar.style.height=`${(numbers[i]/ratio)+20}px`;
        
        bar.style.width=`${((window.screen.width-(window.screen.width/10*2)))/numbers.length}px`;
        contain.style.width = `${((window.screen.width-(window.screen.width/10*2)))/numbers.length}px`;
        contain.style.cssText="height:20px ; text-align:center ; background-color:#01314a; color:white;";
        contain.appendChild(text);
        if(casee==1)
            bar.appendChild(contain)
        arrContainer.appendChild(bar);
    }
}
