const Stack = require('./Stack');
const numbers = new Stack();
numbers.push(421);
numbers.push(423);
numbers.push(500);

while (numbers.peek()){
    let top = numbers.pop();
    console.log(top);
}