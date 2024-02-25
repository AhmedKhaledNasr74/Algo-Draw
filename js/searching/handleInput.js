let warning = document.querySelector(".warning");
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
        let numbers="";
        numbers=input.split(",");
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
        console.log("flag"+flag);
    return flag;
}