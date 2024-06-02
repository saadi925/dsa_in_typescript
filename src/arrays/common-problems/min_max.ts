export function findMax(arr : number[]) {
    return Math.max(...arr);
}

export function findMin(arr : number[]) {
    return Math.min(...arr);
}

console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMin([1, 2, 3, 4, 5])); // Output: 1
