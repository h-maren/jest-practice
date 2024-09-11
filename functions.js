

function capitalize(string){
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string){
    return string.toLowerCase().split("").reverse().join("");
}

module.exports = {capitalize, reverseString}