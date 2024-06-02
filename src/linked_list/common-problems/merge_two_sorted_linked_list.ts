import { createLinkedList, ListNode, traverseLinkedList } from "../intro";

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
console.log(traverseLinkedList(mergeTwoLists(list1, list2))); // Output: [1, 1, 2, 3, 4, 4]
