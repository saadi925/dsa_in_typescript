import { createLinkedList, ListNode, traverseLinkedList } from "../intro";

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let first: ListNode | null = dummy;
    let second: ListNode | null = dummy;

    for (let i = 0; i <= n; i++) {
        first = first!.next;
    }

    while (first !== null) {
        first = first.next;
        second = second!.next;
    }

    second!.next = second!.next!.next;
    return dummy.next;
}

const listToRemove = createLinkedList([1, 2, 3, 4, 5]);
console.log(traverseLinkedList(removeNthFromEnd(listToRemove, 2))); // Output: [1, 2, 3, 5]
