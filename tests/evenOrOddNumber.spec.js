import {test, expect} from "@playwright/test"

function isOddNumber(number){
    if(!Number.isInteger(number)){
        throw Error("This is not a number !")
    }
    if(number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER){
        throw Error("Number is out of min/max boundaries !")
    }
    if(number%2 === 0){
        return false;
    } else {
        return true;
    }
}

