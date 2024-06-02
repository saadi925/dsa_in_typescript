import { reverseString, isPalindrome, firstNonRepeatingCharacter, countVowelsAndConsonants, areAnagrams, longestCommonPrefix, longestPalindromicSubstring, longestSubstringWithoutRepeating, myAtoi, strStr, countAndSay } from '../src/strings/common-problems';

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



test('longestPalindromicSubstring should find the longest palindromic substring', () => {
    expect(longestPalindromicSubstring("babad")).toBe("bab");
    expect(longestPalindromicSubstring("cbbd")).toBe("bb");
});

test('longestSubstringWithoutRepeating should find the length of the longest substring without repeating characters', () => {
    expect(longestSubstringWithoutRepeating("abcabcbb")).toBe(3);
    expect(longestSubstringWithoutRepeating("bbbbb")).toBe(1);
});

test('myAtoi should convert a string to an integer', () => {
    expect(myAtoi("42")).toBe(42);
    expect(myAtoi("   -42")).toBe(-42);
    expect(myAtoi("4193 with words")).toBe(4193);
    expect(myAtoi("words and 987")).toBe(0);
    expect(myAtoi("-91283472332")).toBe(-2147483648);
});

test('strStr should implement the indexOf function', () => {
    expect(strStr("hello", "ll")).toBe(2);
    expect(strStr("aaaaa", "bba")).toBe(-1);
    expect(strStr("", "")).toBe(0);
});

test('countAndSay should generate the nth term in the count-and-say sequence', () => {
    expect(countAndSay(1)).toBe("1");
    expect(countAndSay(4)).toBe("1211");
});
