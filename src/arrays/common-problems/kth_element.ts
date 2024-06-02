export function findKthLargest(arr: number[], k: number): number {
    arr.sort((a, b) => b - a);
    return arr[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
