import { findMax, findMin, findSecondLargest, removeDuplicates, leftRotate, rightRotate, findIntersection, findUnion, findMissingNumber, findKthLargest, mergeSortedArrays, findDuplicate } from '../src/arrays/common-problems/index';

test('findMax should return the maximum element', () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
});

test('findMin should return the minimum element', () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1);
});

test('findSecondLargest should return the second largest element', () => {
    expect(findSecondLargest([1, 2, 3, 4, 5])).toBe(4);
});

test('removeDuplicates should return an array with duplicates removed', () => {
    expect(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('leftRotate should left rotate the array by k positions', () => {
    expect(leftRotate([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5, 1, 2]);
});

test('rightRotate should right rotate the array by k positions', () => {
    expect(rightRotate([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
});


test('findIntersection should return the intersection of two arrays', () => {
    expect(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
});

test('findUnion should return the union of two arrays', () => {
    expect(findUnion([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('findMissingNumber should return the missing number in the array', () => {
    expect(findMissingNumber([3, 0, 1], 3)).toBe(2);
});

test('findDuplicate should return the duplicate number in the array', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
});

test('findKthLargest should return the kth largest element in the array', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
});

test('mergeSortedArrays should merge two sorted arrays', () => {
    expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});