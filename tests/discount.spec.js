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



