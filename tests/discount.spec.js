import {test, expect} from "@playwright/test"

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
};
function getHundredthsRound(number){
    return +number.toFixed(2);
};

function getDiscount(price, discountPercentage){
    if(!Number.isInteger(price) && !isFloat(price)){
        return Error("Price is not a number !").message;
    } 
    if(!Number.isInteger(discountPercentage) && !isFloat(discountPercentage)){
        return Error("Discount is not a number !").message;
    }
    if (price <= 0 ){
        return Error("Price <= 0 !").message;
    }
    if(discountPercentage < 0){
        return Error("Discount < 0").message;
    }
    
    console.log(price * discountPercentage / 100)
    const discountMoney =  price * discountPercentage / 100;
    console.log(getHundredthsRound(price - discountMoney))
    return getHundredthsRound(price - discountMoney);
};


test("Calculate int discount", async () => {
    const result = getDiscount(100, 20);
    expect(result).toBe(80);
});

test("Calculate float price discount", async () => {
    const result = getDiscount(50.8, 10);
    expect(result).toBe(45.72);
});

test("Calculate float discount", async () => {
    const result = getDiscount(300, 12.5);
    expect(result).toBe(262.5);
});

test("Calculate negative price", async () => {
    const result = getDiscount(-300, 12.5);
    expect(result).toBe("Price <= 0 !");
});



