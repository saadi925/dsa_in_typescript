/*
Topic 3: Linked Lists
Concepts to Cover
Introduction to Linked Lists
Basic Operations
Creation
Insertion
Deletion
Traversal
Common Problems
Reverse a Linked List
Detect a Cycle in a Linked List
Merge Two Sorted Linked Lists
Remove N-th Node from the End
Find the Middle of the Linked List
Introduction to Linked Lists
A linked list is a linear data structure where each element is a separate object. Each element (node) of a list is comprising two items:

Data
Pointer to the next node 

*/
export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
export function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

console.log(createLinkedList([1, 2, 3, 4])); // Output: ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 4, next: null } } } }


// Traverse a Linked List
export function traverseLinkedList(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

const linkedList = createLinkedList([1, 2, 3, 4]);
console.log(traverseLinkedList(linkedList)); // Output: [1, 2, 3, 4]

