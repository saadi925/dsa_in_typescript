import { createLinkedList, traverseLinkedList, reverseLinkedList, hasCycle, mergeTwoLists, removeNthFromEnd, findMiddle, getIntersectionNode, deleteDuplicates, rotateRight } from '../src/linked_list/common-problems';
import { ListNode } from '../src/linked_list/intro';

test('createLinkedList should create a linked list from an array', () => {
    expect(traverseLinkedList(createLinkedList([1, 2, 3, 4]))).toEqual([1, 2, 3, 4]);
});

test('reverseLinkedList should reverse a linked list', () => {
    const listToReverse = createLinkedList([1, 2, 3, 4]);
    expect(traverseLinkedList(reverseLinkedList(listToReverse))).toEqual([4, 3, 2, 1]);
});

test('hasCycle should detect a cycle in a linked list', () => {
    const cycleList = createLinkedList([1, 2, 3, 4]);
    if (cycleList) {
        let current = cycleList;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = cycleList;
    }
    expect(hasCycle(cycleList)).toBe(true);
    const noCycleList = createLinkedList([1, 2, 3, 4]);
    expect(hasCycle(noCycleList)).toBe(false);
});;

test('mergeTwoLists should merge two sorted linked lists', () => {
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);
    expect(traverseLinkedList(mergeTwoLists(list1, list2))).toEqual([1, 1, 2, 3, 4, 4]);
});

test('removeNthFromEnd should remove the n-th node from the end of a linked list', () => {
    const listToRemove = createLinkedList([1, 2, 3, 4, 5]);
    expect(traverseLinkedList(removeNthFromEnd(listToRemove, 2))).toEqual([1, 2, 3, 5]);
});

test('findMiddle should find the middle of a linked list', () => {
    const listToFindMiddle = createLinkedList([1, 2, 3, 4, 5]);
    const middleNode = findMiddle(listToFindMiddle);
    expect(middleNode?.val).toBe(3);
});
test('getIntersectionNode should detect the intersection of two linked lists', () => {
    const intersectingNode = new ListNode(8, new ListNode(10));
    const listA = createLinkedList([4, 1]);
    listA!.next!.next = intersectingNode;

    const listB = createLinkedList([5, 6, 1]);
    listB!.next!.next!.next = intersectingNode;

    expect(getIntersectionNode(listA, listB)).toBe(intersectingNode);

    const nonIntersectingListA = createLinkedList([2, 6, 4]);
    const nonIntersectingListB = createLinkedList([1, 5]);
    expect(getIntersectionNode(nonIntersectingListA, nonIntersectingListB)).toBe(null);
});

test('deleteDuplicates should remove duplicates from a sorted linked list', () => {
    const listWithDuplicates = createLinkedList([1, 1, 2, 3, 3]);
    expect(traverseLinkedList(deleteDuplicates(listWithDuplicates))).toEqual([1, 2, 3]);

    const listWithoutDuplicates = createLinkedList([1, 2, 3]);
    expect(traverseLinkedList(deleteDuplicates(listWithoutDuplicates))).toEqual([1, 2, 3]);
});

test('rotateRight should rotate the linked list to the right by k places', () => {
    const listToRotate = createLinkedList([1, 2, 3, 4, 5]);
    expect(traverseLinkedList(rotateRight(listToRotate, 2))).toEqual([4, 5, 1, 2, 3]);

    const listToRotateByZero = createLinkedList([1, 2, 3]);
    expect(traverseLinkedList(rotateRight(listToRotateByZero, 0))).toEqual([1, 2, 3]);

    const singleElementList = createLinkedList([1]);
    expect(traverseLinkedList(rotateRight(singleElementList, 5))).toEqual([1]);
});
