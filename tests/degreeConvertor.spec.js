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

test("get C from F", async () => {
    const result = getDegree("25C");
    expect(result).toBe(57);
});

test("get F from C", async () => {
    const result = getDegree("100F");
    expect(result).toBe(68);
});

test("No char in string", async () => {
    const result = getDegree("100");
    expect(result).toBe("Not a temperature measure !");
});
