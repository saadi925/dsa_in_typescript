import { reverseString, isPalindrome, firstNonRepeatingCharacter, countVowelsAndConsonants, areAnagrams, longestCommonPrefix } from '../src/strings/common-problems';

test('reverseString should reverse the string', () => {
    expect(reverseString("hello")).toBe("olleh");
});

test('isPalindrome should check if the string is a palindrome', () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
});

test('firstNonRepeatingCharacter should return the first non-repeating character', () => {
    expect(firstNonRepeatingCharacter("swiss")).toBe("w");
    expect(firstNonRepeatingCharacter("aabbcc")).toBe(null);
});

test('countVowelsAndConsonants should count the number of vowels and consonants', () => {
    expect(countVowelsAndConsonants("hello world")).toEqual({ vowels: 3, consonants: 7 });
});

test('areAnagrams should check if two strings are anagrams', () => {
    expect(areAnagrams("listen", "silent")).toBe(true);
    expect(areAnagrams("hello", "world")).toBe(false);
});

test('longestCommonPrefix should find the longest common prefix', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});
