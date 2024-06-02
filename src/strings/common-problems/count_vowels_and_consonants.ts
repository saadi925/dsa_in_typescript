export function countVowelsAndConsonants(str: string): { vowels: number, consonants: number } {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.toLowerCase() !== char.toUpperCase()) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

console.log(countVowelsAndConsonants("hello world")); // Output: { vowels: 3, consonants: 7 }
