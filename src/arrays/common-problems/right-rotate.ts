export function rightRotate(arr: number[], k: number): number[] {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rightRotate([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
