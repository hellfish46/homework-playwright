import {test, expect} from "@playwright/test"


function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
};

function tellFortune(childrenCount, partnerName, geographicPlace, jobPost){
    if(!Number.isInteger(childrenCount)){
        return Error("Wrong format of children count - not a number!").message;
    }
    if(isFloat(childrenCount)){
        return Error("Wrong format of children count - float number!").message;
    }
    if (childrenCount < 0 ) {
        return Error("childrenCount is negative number!").message;
    }
    let childStringCalling;
    if(childrenCount === 1) {
        childStringCalling = " child."
    }else {
        childStringCalling = " children."  
    }

    if(typeof partnerName !== "string") {
        return Error("partnerName is not a string !").message;
    }
    if(typeof geographicPlace !== "string") {
        return Error("geographicPlace is not a string !").message;
    }
    if(typeof jobPost !== "string") {
        return Error("jobPost is not a string !").message;
    }

    return "You will get " + jobPost + " in " + geographicPlace + " married " + partnerName +  " and have " + childrenCount + childStringCalling;
}


test("get fortune 2 children", async () => {
    const result = tellFortune(2, "Anastasia" , "Canada", "engineer");
    expect(result).toBe("You will get engineer in Canada married Anastasia and have 2 children.");
});

test("get fortune 1 child", async () => {
    const result = tellFortune(1, "Anastasia" , "Canada", "engineer");
    expect(result).toBe("You will get engineer in Canada married Anastasia and have 1 child.");
});


