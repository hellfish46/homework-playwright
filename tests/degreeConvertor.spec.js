import {test, expect} from "@playwright/test"

function isString(variable) {
    return typeof variable === "string";
  }

function getNumberFromString(stringNumber){
    if (Number.isNaN(Number.parseFloat(stringNumber))) {
        return Error("This is not a number !").message;
      }
      return parseFloat(stringNumber)
}
  
function getDegree(degree){
    if(!isString(degree)){
        return Error("This is not a string !").message;
    }
    if(degree.indexOf("F") === -1 && degree.indexOf("C") === -1){
        return Error("Not a temperature measure !").message;
    }
    if(degree.indexOf("F")>0){
        console.log(Math.round(degree) - 32);
        return getNumberFromString(degree) - 32;
    } 
    if(degree.indexOf("C")>0) {
        console.log(Math.round(degree) + 32);
        return getNumberFromString(degree) + 32;
    }
}