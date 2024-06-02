// Example: Reverse a string function
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));  // Output: "olleh"

export { reverseString };
