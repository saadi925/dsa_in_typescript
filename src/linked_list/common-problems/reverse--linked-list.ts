import { createLinkedList, ListNode, traverseLinkedList } from "../intro";

export function reverseLinkedList(head: ListNode | null): ListNode | null {
    let prev = null;
    let current = head;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

const listToReverse = createLinkedList([1, 2, 3, 4]);
console.log(traverseLinkedList(reverseLinkedList(listToReverse))); // Output: [4, 3, 2, 1]

// Next : Detect a Cycle in a Linked List