export function findIntersection(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const intersection: number[] = [];

    for (const num of arr2) {
        if (set1.has(num)) {
            intersection.push(num);
        }
    }

    return intersection;
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
