

function capitalize(string){
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
    return string.toLowerCase().split("").reverse().join("");
}

const calculator = {
    add(a,b) {
        return Number(a)+Number(b)
    },
    subtract(a,b){
        return Number(a)-Number(b);
    },
    divide (a,b){
        return a/b;
    },
    multiply (a,b){
        return a*b;
    }
}

function caesarCipher(string,num){
    let result='';
    for(let i=0; i<string.length; i++){
        let origCharCode=string.charCodeAt((i));
        let newCharCode=origCharCode+num;
        //check if charCode is lowercase
        if(origCharCode>96 && origCharCode<123){
            //if charCode is outside bounds
            if(newCharCode>122){
                newCharCode=(newCharCode-122)+96;
            }
            if(newCharCode<97){
                newCharCode=(newCharCode-97)+123;
            }
        } 
        //check if charCode is upperCase
        else if(origCharCode>64 && origCharCode<91){
            //if charCode is outside bounds
            if(newCharCode>90){
                 newCharCode=(newCharCode-90)+64;
             }
            if(newCharCode<65){
                newCharCode=(newCharCode-65)+91;
             }   
        }
        else {
            //case if it's not a letter, uses original punctuation
            newCharCode=origCharCode;
        }
        result+=String.fromCharCode(newCharCode);
    }
    return result;
}

function analyzeArray(arr){
    let result = {
        average: arr.reduce((curr,prev) => curr+prev, 0)/arr.length,
        min: findMin(arr),
        max: findMax(arr),
        length: arr.length,
    };
    function findMin(arr){
        arr.sort();
        return arr[0];
    };
    function findMax(arr){
        arr.sort();
        return arr[arr.length-1];
    }
    return result;
}


module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray}