const Node = require('./Node');

// all reference values; store reference to node object,
// not node itself
const n1 = new Node(42);
const n2 = new Node(43);
const n3 = new Node(101);

// node class is to store data;
// usually would want to create another class to store the linked list

n1.setNext(n2);
n2.setNext(n3);
// can don't set if null since default is null
n3.setNext(null);

// console.log(n1.getValue());
// console.log(n1.getNext().getValue());
// console.log(n1.getNext().getNext().getValue());

// next stores the reference to the next object
const head = n1;
let current = head;
while (current != null) {
    console.log(current.getValue());
    current = current.getNext();
}

// list transversal => start at the head of the list, then move