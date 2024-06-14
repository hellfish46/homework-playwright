import {test, expect} from "@playwright/test"

function isOddNumber(number){
    if(!Number.isInteger(number)){
        return Promise.reject(Error("This is not a number !"));
    }
    if(number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER){
        return Promise.reject(Error("Number is out of min/max boundaries !"));
    }
    if(number%2 === 0){
        return false;
    } else {
        return true;
    }
}


test("positive odd number", async () => {
    const result = isOddNumber(1);
    expect(result).toBeTruthy();
});

test("negative odd number", async () => {
    const result = isOddNumber(-21);
    expect(result).toBeTruthy();
});

test("positive even number", async () => {
    const result = isOddNumber(2);
    expect(result).toBeFalsy();
});

test("negative even number", async () => {
    const result = isOddNumber(-10);
    expect(result).toBeFalsy();
});

test("number 0", async () => {
    const result = isOddNumber(0);
    expect(result).toBeFalsy();
});

test("not a number", async () => {
    const result = isOddNumber(undefined);
    expect(result).rejects.toThrow("This is not a number !");
});
