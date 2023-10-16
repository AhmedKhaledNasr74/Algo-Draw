import { getSpeed } from "./algorithmsHelper.js";
import {numbers,modifyRunFlag} from "./main.js";
import { compare ,progress ,done, timer } from "./domChanger.js";
async function swapDom(i,j,check){
    let bars = document.querySelectorAll(".bar");
    bars.forEach(async bar=>{
        if(bar.getAttribute("order")==i||bar.getAttribute("order")==j){
            if(check==1)
                bar.style.backgroundColor="#2bff00";
            else
                bar.style.backgroundColor="#53f3f3";
        }
        

    })
    if(check==1){
            bars[i].setAttribute("order",j);
            bars[j].setAttribute("order",i);
            bars[i].parentElement.insertBefore(bars[j],bars[i]);
            //await timer(0.1);
            bars[j].parentElement.insertBefore(bars[i],bars[j+1]);
            
        }
}

async function swap(numbers, leftIndex, rightIndex){
    //swapdommmm
    var temp = +numbers[leftIndex];
    numbers[leftIndex] = +numbers[rightIndex];
    numbers[rightIndex] = +temp;
}
async function partition(numbers, left, right) {
    let pivot   = numbers[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (+numbers[i] < pivot) {
            compare(i,1);
            await timer(getSpeed());
            compare(i,0);
            i++;
            
        }
        while (+numbers[j] > pivot) {
            compare(j,1);
            await timer(getSpeed());
            compare(j,0);
            j--;
            
        }
        if (i <= j) {
            //sawpping two elements
                await timer(getSpeed());
                swapDom(i, j,1);
                await timer(getSpeed());
                swapDom(i,j,0);
                //await timer(1000);
            swap(numbers, i, j);
            i++;
            j--;
        }
    }
    
    return i;
}
 // 1 22 25 26 36 62 82 95 120

export async function quickSort(numbers, left, right) {
    var index;
    if (numbers.length > 1) {
        index = await partition(numbers, left, right); //index returned from partition
        
        if (left < index - 1) { //more elements on the left side of the pivot
            await quickSort(numbers, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            await quickSort(numbers, index, right);
        }
    }
    //modifyRunFlag(0);
}