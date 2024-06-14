import {test, expect} from "@playwright/test"

function getLargerNumber(firstNumber, secondNumber){
    if(!Number.isInteger(firstNumber)){
        return Promise.reject(Error("First argument is not a number !"));
    } else if (!Number.isInteger(secondNumber)){
        return Promise.reject(Error("Second argument is not a number !"));
    }

    if(firstNumber > Number.MAX_SAFE_INTEGER || firstNumber < Number.MIN_SAFE_INTEGER){
        return Promise.reject(Error("First argument is out of min/max boundaries !"))
    } else if (secondNumber > Number.MAX_SAFE_INTEGER || secondNumber < Number.MIN_SAFE_INTEGER){
        return Promise.reject(Error("Second argument is out of min/max boundaries !"));
    } 

    if(firstNumber < secondNumber ){
        return secondNumber;
    } else if (firstNumber > secondNumber ) {
        return firstNumber;
    } else {
        return Promise.reject(Error("These numbers are equals !"));
    }
}


    test("positive numbers - first number larger", async () => {
        const result = getLargerNumber(3,2);
        expect(result).toEqual(3);
    });

    test("positive numbers - second number larger", async () => {
        const result = getLargerNumber(2,3);
        expect(result).toEqual(3);
    });

    test("negative numbers - first number larger", async () => {
        const result = getLargerNumber(-10,-11);
        expect(result).toEqual(-10);
    });

    test("negative numbers - second number larger", async () => {
        const result = getLargerNumber(-14,-11);
        expect(result).toEqual(-11);
    });

    test("negative and negative numbers - first number larger", async () => {
        const result = getLargerNumber(5,-1);
        expect(result).toEqual(5);
    });

    test("negative and negative numbers - second number larger", async () => {
        const result = getLargerNumber(-3,11);
        expect(result).toEqual(11);
    });

    test("both numbers are equals", async () => {
        const result = getLargerNumber(3,3);
        expect(result).rejects.toThrow("These numbers are equals !");
    });

    test("first number more allowed MAX number", async () => {
        const result = getLargerNumber(9999999999999990,0);
        expect(result).rejects.toThrow("First argument is out of min/max boundaries !");
    });

    test("first number less allowed MIN number", async () => {
        const result = getLargerNumber(-9999999999999990,10);
        expect(result).rejects.toThrow("First argument is out of min/max boundaries !");
    });

    test("second number more allowed MAX number", async () => {
        const result = getLargerNumber(1,9999999999999990);
        expect(result).rejects.toThrow("Second argument is out of min/max boundaries !");
    });

    test("second number less allowed MIN number", async () => {
        const result = getLargerNumber(-10,9999999999999990);
        expect(result).rejects.toThrow("Second argument is out of min/max boundaries !");
    });

    test("first argument not a number", async () => {
        const result = getLargerNumber(null, 12);
        expect(result).rejects.toThrow("First argument is not a number !");
    });

    test("second argument not a number", async () => {
        const result = getLargerNumber(33, "234");
        expect(result).rejects.toThrow("Second argument is not a number !");
    });

    