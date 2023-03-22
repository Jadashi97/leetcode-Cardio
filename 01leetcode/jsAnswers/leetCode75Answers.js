// Qtn.1 Given the head of a singly linked list, reverse the list, and return the reversed list.
var reverseList = function(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

  return prev;
};