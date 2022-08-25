// can derive length of linked list by a counter
class LinkedList {
    constructor() {
        // if the head is 'null', it means that the
        // linked list is empty
        this.head = null;
        // this.tail = null;
    }

    // if we assume length of linkedlist is n,
    // while loop must always run n-1 times => n times;
    // => complexity is o(n)
    // save this.tail to change complexity to o1;
    push(newNode) {
        // if the linked list is empty
        // i.e. this.head is null
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            // move current until it gets to last node in the list
            while (current.getNext() != null) {
                // want current to be at last node
                current = current.getNext();
            }
            // when the loop finishes, current will be referring to the last node in the list
            current.next = newNode;
        }
    }
    print() {
        let current = this.head;
        while (current != null) {
            // want current to move past last node to null
            // if not last node will not be printed out
            console.log(current.getValue());
            current = current.getNext();
        }
    }

    insertAt(index, newNode) {
        // empty list and we are inserted at index
        if (this.head == null && index == 0) {
            this.head == newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.getNext();
            }
            newNode.setNext (current.getNext());
            current.setNext(newNode);
        }
    }

    deleteAt(index){
        if (this.head == null){
            return;
        }
        if (index == 0){
            this.head = this.head.getNext();
            // no need to explicitly delete the old head
            // because there is n variable referring to it
            // therefore it will be deleted automatically
            // i.e. garbage collection
        } else {
            // move current so that it is just one node
            // before the one to be deleted
            let current = this.head;
            for (let i=0; i<index-1; i++){
                current = current.getNext();
            }
            // current should refer to one node before the 
            // one to be deleted (aka "D")
            // the next of Before should be the next of D
            const toBeDeleted = current.getNext();
            current.setNext(toBeDeleted.getNext());
        }
    }

    getAt(index){
        if (this.head == null){
            return null;
        }
        // check that the index is not greater than the last item in the list?
        let current = this.head;
        for (let i=0; i< index; i++){
            current = current.getNext();
        }
        return current;
    }

}

module.exports = LinkedList