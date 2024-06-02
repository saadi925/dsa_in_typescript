export function firstNonRepeatingCharacter(str: string): string | null {
    const charCount: { [key: string]: number } = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
