# JavaScript Essentials

This project contains examples of essential JavaScript concepts and features, including loops, conditionals, functions, arrow functions, Node.js, promises, async, and callbacks.

## Loops

Loops are used to execute a block of code multiple times. JavaScript has several types of loops, including for, while, and do-while loops.

### Example

for (let i = 0; i < 10; i++) {
console.log(i);
}

## Conditionals

Conditionals are used to execute different blocks of code depending on whether a certain condition is true or false. JavaScript has several conditional statements, including if, else if, and else.

### Example

let x = 10;

if (x > 5) {
console.log("x is greater than 5");
} else {
console.log("x is less than or equal to 5");
}

## Functions

Functions are blocks of code that can be reused throughout a program. They can be defined using the function keyword, or as arrow functions.

### Example

function addNumbers(x, y) {
return x + y;
}

const multiplyNumbers = (x, y) => {
return x \* y;
};

## Node.js

Node.js is a runtime environment for executing JavaScript code outside of a web browser. It allows developers to create server-side applications using JavaScript.

### Example

const http = require("http");

const server = http.createServer((req, res) => {
res.writeHead(200, { "Content-Type": "text/plain" });
res.end("Hello, World!");
});

server.listen(3000, () => {
console.log("Server running on port 3000");
});

## Promises

Promises are used to handle asynchronous operations in JavaScript. They represent a value that may not be available yet, but will be at some point in the future.

### Example

const promise = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Success!");
}, 1000);
});

promise.then((result) => {
console.log(result);
});

## Async/Await

Async/await is a modern syntax for handling asynchronous operations in JavaScript. It allows developers to write asynchronous code that looks similar to synchronous code.

### Example

const getData = async () => {
const response = await fetch("https://api.example.com/data");
const data = await response.json();
return data;
};

getData().then((data) => {
console.log(data);
});

## Callbacks

Callbacks are functions that are passed as arguments to other functions. They are often used to handle asynchronous operations in JavaScript.

### Example

const fetchData = (callback) => {
setTimeout(() => {
const data = { name: "John", age: 30 };
callback(data);
}, 1000);
};

fetchData((data) => {
console.log(data);
});

## Testing

Testing is an important part of any software development project. There are several testing frameworks available for JavaScript, including Jest and Mocha.

### Example

const sum = (a, b) => {
return a + b;
};

describe("sum function", () => {
test("adds 1 + 2 to equal 3", () => {
expect(sum(1, 2)).toBe(3);
});
});

Before executing the code in terminal run command npm install.
