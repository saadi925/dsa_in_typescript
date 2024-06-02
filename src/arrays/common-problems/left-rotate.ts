export function leftRotate(arr: number[], k: number): number[] {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
}

console.log(leftRotate([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]
