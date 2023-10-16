import { getSpeed } from "./algorithmsHelper.js";
import {numbers,modifyRunFlag} from "./main.js";
import { compare ,progress ,done ,timer } from "./domChanger.js";

export async function bubbleSort () { // We need to wrap the loop into an async function for this to work
    
    for (let i = 0; i < numbers.length; i++) {
        let cnt =false;
        for(let j=0;j<numbers.length-i-1;j++){
            //await timer(200);
                compare(j,1);
                compare(j+1,1);
                    await timer(getSpeed());
                compare(j,0);
                compare(j+1,0);
            if(+numbers[j]>+numbers[j+1]){
                cnt=true;
                progress(j,1);
                    await timer(getSpeed());
                progress(j,0);
                let temp=numbers[j];
                numbers[j]=numbers[j+1];
                numbers[j+1]=temp;
            }
        }
        done((numbers.length-i-1));
        if(!cnt){
            for(let z=i;z<numbers.length;z++)
                done((numbers.length-z-1));
            break;
        }
        
    }
    modifyRunFlag(0);
}