export function longestSubstringWithoutRepeating(s: string): number {
    let maxLength = 0, start = 0;
    const charIndexMap: { [key: string]: number } = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (currentChar in charIndexMap) {
            start = Math.max(start, charIndexMap[currentChar] + 1);
        }
        charIndexMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: 3
