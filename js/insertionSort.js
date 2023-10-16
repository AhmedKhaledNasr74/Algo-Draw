import { getSpeed } from "./algorithmsHelper.js";
import {numbers,modifyRunFlag} from "./main.js";
import { compare ,progress ,done, timer } from "./domChanger.js";

export async function insertionSort() {
    
    for (let i = 1; i < numbers.length; i++) {
        let currentValue = numbers[i];
        compare(i,1);
        await timer(getSpeed());
        let j;
        for (j = i - 1; j >= 0 && +numbers[j] > +currentValue; j--) {
            progress(j,1);
            await timer(getSpeed());
            numbers[j + 1] = numbers[j]
            progress(j,0);
            await timer(getSpeed());
        }
        
        compare(i,0);
        numbers[j + 1] = currentValue;
        
    }
    console.log(numbers);
    modifyRunFlag(0);
}