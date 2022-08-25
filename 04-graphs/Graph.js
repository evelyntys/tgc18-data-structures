const Queue = require("./dataStructures/Queue");
const Stack = require("./dataStructures/Stack");
// graph does not need to know anything about the queue class
//  => encapsulation

class Graph {
    constructor() {
        // use an object to store the nodes
        // to create a look up table
        // so we can use the 'id' of a node to get the node itself
        this.nodes = {};
    }
    // two arguments
    // 1st arg: the id (unique of the node)
    // 2nd arg: the node itself

    addNode(id, node) {
        this.nodes[id] = node;
    }

    addEdge(startNodeID, endNodeID){
        const startNode = this.nodes[startNodeID];
        const endNode = this.nodes[endNodeID];

        // make sure that the start node and end node are not already connected
        if (startNode.getNeighbours().map(n=>n.node).includes(endNode)){
            return;
        }

        if (endNode.getNeighbours().map(n=>n.node).includes(startNode)){
            return;
        }
        
        if (startNode && endNode){
            startNode.addNeighbour(endNode);
            endNode.addNeighbour(startNode);
        }
    }
    // breadth first search
    bfs(startNodeID){
        const startNode = this.nodes[startNodeID];
        const visited = []; //store all the visited nodes
        const queue = new Queue();
        queue.enqueue(startNode);
        // while there is still nodes in the queue
        while(queue.peek()){
            const front = queue.dequeue();
            if (visited.includes(front) == false){
                // proceed to visit
                console.log('visiting node ' + front.value);
                const neighbourNodes = front.getNeighbours().map(n => n.node);
                for(let n of neighbourNodes){
                    queue.enqueue(n);
                }
                // mark the current node as visited
                visited.push(front);
            }
        }
    }

    dfs(startNodeID){
        const startNode = this.nodes[startNodeID];
        const visited = []; //store all the visited nodes
        const stack = new Stack();
        stack.push(startNode);
        // while there is still nodes in the queue
        while(stack.peek()){
            const front = stack.pop();
            if (visited.includes(front) == false){
                // proceed to visit
                console.log('visiting node ' + front.value);
                const neighbourNodes = front.getNeighbours().map(n => n.node);
                for(let n of neighbourNodes){
                    stack.push(n);
                }
                // mark the current node as visited
                visited.push(front);
            }
        }
    }

}

// no need to require in Node since never define new Node

module.exports = Graph