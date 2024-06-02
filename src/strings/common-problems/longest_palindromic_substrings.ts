export function longestPalindromicSubstring(s: string): string {
    if (s.length < 2) return s;

    let start = 0, maxLength = 1;

    function expandAroundCenter(left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i - 1, i + 1); // Odd length palindromes
        expandAroundCenter(i, i + 1);     // Even length palindromes
    }

    return s.substring(start, start + maxLength);
}

console.log(longestPalindromicSubstring("babad")); // Output: "bab" or "aba"
