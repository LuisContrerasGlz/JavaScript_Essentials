// 1. Regular function way
(function () {})()(
  // 2. Arrow Function way
  () => {}
)()(
  // Named IIFE
  function print() {
    console.log("Hello World");
  }
)();

// This would give an error
print();

// Semicolon prepended to IIFE
let name = "Luis";
(function print() {
  console.log("Hello World");
})();
