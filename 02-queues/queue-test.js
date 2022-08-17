const Queue = require ('./Queue');

const peopleQueue = new Queue();
peopleQueue.enqueue('John');
peopleQueue.enqueue('Mary');
peopleQueue.enqueue('Peter');

function printQueue(q){
    let q2 = new Queue();
    while (q.peek()){
        let front = q.dequeue();
        q2.enqueue(front);
        console.log(front);
    }
    q = q2;
}

printQueue(peopleQueue);

// queue transversal
// while (peopleQueue.peek()){
//     let front = peopleQueue.dequeue();
//     console.log(front);
// }