import {test, expect} from "@playwright/test"



function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
};

function getHundredthsRound(number){
    return +number.toFixed(2);
};


function calculateDogAge(age, isDogAgeCalculation){
    if(!Number.isInteger(age) && !isFloat(age)){
        return Error("Age is not a number !").message;
    } 
    if (age < 0 ){
        return Error("Age < 0 !").message;
    }
    if (typeof isDogAgeCalculation !== "boolean") {
        return Error("isDogAgeCalculation is not boolean !").message;
    }

    if(isDogAgeCalculation){
        return calculateHumanToDogAge(age);
    } else {
        return calculateDogToHumanAge(age);
    }

}

function calculateHumanToDogAge(age){
    const dogsMod = 7;
    return "Your dog is " + getHundredthsRound(age*dogsMod) + " years old.";

}

function calculateDogToHumanAge(age){
    const dogsMod = 7;
    return "You are is " + getHundredthsRound(age/dogsMod) + " years old.";
}



test("Calculate dog age", async () => {
    const result = calculateDogAge(1, true);
    expect(result).toBe("Your dog is 7 years old.");
});

test("Calculate human age", async () => {
    const result = calculateDogAge(14, false);
    expect(result).toBe("You are is 2 years old.");
});

test("Calculate dog age with negative human age", async () => {
    const result = calculateDogAge(-1, true);
    expect(result).toBe("Age < 0 !");
});

