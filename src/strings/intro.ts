/*
Topic 2: Strings
Concepts to Cover
Introduction to Strings
Basic Operations
Length
Traversing
Concatenation
Substrings
Comparison
Common Problems
Reverse a String
Check if a String is a Palindrome
Find the First Non-Repeating Character
Count the Number of Vowels and Consonants
Check if Two Strings are Anagrams
Longest Common Prefix
Introduction to Strings
A string is a sequence of characters. Strings are immutable in JavaScript and TypeScript, meaning once a string is created, its value cannot be changed. However, new strings can be created based on the existing ones.
*/

const str: string = "Hello, World!";
console.log(str.length); // Output: 13

// Traversing
for (let i = 0; i < str.length; i++) {
    console.log(str[i]); 
} // Output:  H e l l o ,   W o r l d !

// Concatenation
const str1: string = "Hello, ";
const str2: string = "World!";
const result: string = str1.concat(str2);
console.log(result); // Output: Hello, World!

// Substrings 
const substr: string = str.substring(7, 12);
console.log(substr); // Output: World

// Comparison
console.log(str1 === str2); // Output: false

