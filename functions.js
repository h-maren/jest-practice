

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


module.exports = {capitalize, reverseString, calculator}