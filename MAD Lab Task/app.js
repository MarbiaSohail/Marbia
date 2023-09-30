// PROBLEM #01: print kth digit from last
function findK(number, k) {
    const stringNumber = number.toString();
    if (k <= 0 || k > stringNumber.length) {
        return "Invalid k";
    }
    return parseInt(stringNumber.charAt(stringNumber.length - k));
}
let result1 = findK(23617, 4);
console.log(result1); 


// PROBLEM #02: find sum of all digits
function sumOfDigits(number) {
    const strNumber = number.toString();
    const digitArray = strNumber.split('').map(Number);
    const sum1 = digitArray.reduce((acc, val) => acc + val, 0);
    return sum1;
}

const result2 = sumOfDigits(23618);
console.log(result2); 


// PROBLEM #03: find sum of even digits
function sumOfEvenDigits(number) {
    const num1 = number.toString();
    const digitArray = num1.split('').map(Number);
    const sum = digitArray.filter(digit => digit % 2 === 0).reduce((acc, val) => acc + val, 0);
    return sum;
}

const result3 = sumOfEvenDigits(23617);
console.log(result3); 


// PROBLEM #04: calculate squares and cubes of number from 0 to 10
for (let i = 0; i <= 10; i++) {
    const square = i * i;
    const cube = i * i * i;
    console.log(`Number: ${i}, Square: ${square}, Cube: ${cube}`);
    // isko check kren k colour change q nahi ho raha ${i} ka
    // bcs we have to use tilde button instead of inverted commas
    // console.log(`Number: ${i}, Square: ${square}, Cube: ${cube}`)
}

// PROBLEM #05: 
function LeftMostVowelPosition(str) {
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return i;
        }
    }
    return -1; // No vowel found
}

function reverseDigits(number) {
    const reversedStr = number.toString().split('').reverse().join('');
    return parseInt(reversedStr);
}

console.log(LeftMostVowelPosition("hello")); 
console.log(reverseDigits(12345)); 


// PROBLEM #06: guess number b/w 1 to 10

const randomNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt("Enter your guess (1 to 10):"));

if (userGuess === randomNumber) {
    console.log("You WIN");
} else {
    console.log("Not matched");
}


// PROBLEM #07: whether 10 appears in first or last position of a given array of integers

function check10FirstLast(arr) {
    if (arr.length >= 2 && (arr[0] === 10 || arr[arr.length - 1] === 10)) {
        return true;
    }
    return false;
}

const array1 = [1, 2, 3, 4, 10];
const array2 = [10, 2, 3, 4, 5];

console.log(check10FirstLast(array1)); 
console.log(check10FirstLast(array2)); 


// PROBLEM #08: arrange in alphabetical order

function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
}

const inputString = 'comsats';
const sortedString = sortStringAlphabetically(inputString);
console.log(sortedString); 




