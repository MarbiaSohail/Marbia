// JavaScript String Methods
/*
MARBIA SOHAIL
SP21-BSE-017
JAVASCRIPT STRING METHODS
*/

/* use string methods of javascript in a program */

// Original string
const originalString = "   This is MAD Assignment 1 by Marbia  ";

/* 1. String Length: length attribute gives the length of a string */
const length = originalString.length;
console.log(`String Length: ${length}`);

// 2. String Slice: Extracts a portion of a string and returns it as a new string.
const slicedString = originalString.slice(3, 8);
console.log(`String Slice: "${slicedString}"`);

// 3. String Substring:  Extracts a portion of a string based on indices and returns it.
const substring = originalString.substring(3, 8);
console.log(`String Substring: "${substring}"`);

// 4. String Substr: Extracts a specified number of characters from a string, starting at a specified index.
const substr = originalString.substr(3, 8);
console.log(`String Substr: "${substr}"`);

// 5. String Replace: Replaces a specified substring or pattern with another substring.
const replacedString = originalString.replace("Assignment", "Task");
console.log(`String Replace: "${replacedString}"`);

// 6. String ReplaceAll: Replaces all occurrences of a specified substring or pattern with another substring.
if (String.prototype.replaceAll) {
  const replacedAllString = originalString.replaceAll("s", "z");
  console.log(`String ReplaceAll: "${replacedAllString}"`);
}

// 7. String toUpperCase: Converts a string to uppercase letters.
const upperCaseString = originalString.toUpperCase();
console.log(`String toUpperCase: "${upperCaseString}"`);

// 8. String toLowerCase: Converts a string to lowercase letters.
const lowerCaseString = originalString.toLowerCase();
console.log(`String toLowerCase: "${lowerCaseString}"`);

// 9. String Concatenation: Combines (concatenates) two or more strings.
const string1 = "Marbia";
const string2 = "SE6";
const concatenatedString = `${string1}-${string2}`;
console.log(`String Concatenation: "${concatenatedString}"`);

// 10. String Trim: Removes leading and trailing whitespace characters from a string.
const trimmedString = originalString.trim();
console.log(`String Trim: "${trimmedString}"`);

// 11. String TrimStart: Removes leading whitespace characters from a string.
const trimStartString = originalString.trimStart();
console.log(`String TrimStart: "${trimStartString}"`);

// 12. String TrimEnd: Removes trailing whitespace characters from a string.
const trimEndString = originalString.trimEnd();
console.log(`String TrimEnd: "${trimEndString}"`);

// 13. String PadStart: Pads the beginning of a string with a specified character until it reaches a specified length.
let padStartLength = 20;
let padStartCharacter = "*";
let padStartString = originalString.padStart(padStartLength, padStartCharacter);
console.log(`String PadStart: "${padStartString}"`);

// 14. String PadEnd: Pads the end of a string with a specified character until it reaches a specified length.
let padEndLength = 30;
let padEndCharacter = "*";
let padEndString = originalString.padEnd(padEndLength, padEndCharacter);
console.log(`String PadEnd: "${padEndString}"`);

// 15. String CharAt: Returns the character at a specified index in a string.
const charAtIndex = originalString.charAt(6);
console.log(`Character at index 6: "${charAtIndex}"`);

// 16. String CharCodeAt: Returns the Unicode value (integer) of the character at a specified index in a string.
const charCodeAtIndex = originalString.charCodeAt(6);
console.log(`Character code at index 6: ${charCodeAtIndex}`);

// 17. String Split: Splits a string into an array of substrings based on a specified delimiter.
const splitString = originalString.split(" ");
console.log("String Split:");
console.log(splitString);
