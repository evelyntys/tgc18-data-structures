const Node = require('./Node');
const LinkedList = require('./LinkedList');

let numberList = new LinkedList();
numberList.push(new Node(101));
numberList.push(new Node(102));
numberList.push(new Node(103));

// numberList.print();

numberList.insertAt(1, new Node(444));
numberList.print();

numberList.deleteAt(1);
numberList.print();