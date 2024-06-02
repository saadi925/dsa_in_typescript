export function findUnion(arr1: number[], arr2: number[]): number[] {
    const unionSet = new Set([...arr1, ...arr2]);
    return Array.from(unionSet);
}

console.log(findUnion([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
