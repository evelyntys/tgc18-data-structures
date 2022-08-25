const Node = require("./Node");
// unlike a LinkedList, a graph does not have a starting point

let n1 = new Node(101);
let n2 = new Node(102);
let n3 = new Node(104);
let n4 = new Node(105);
let n5 = new Node(106);

// most of the graphs are bi-directional if never specify arrow 
n1.addNeighbour(n2);
n2.addNeighbour(n1);

n2.addNeighbour(n3);
n2.addNeighbour(n4);

n3.addNeighbour(n2);

n4.addNeighbour(n2);

n4.addNeighbour(n5);
n5.addNeighbour(n4);

console.dir(n1);