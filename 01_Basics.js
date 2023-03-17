// Variables and Constants
const name = "Luis";
console.log("The name is: " + name);

let age = 18;
console.log("Age is : " + age);

let ageMoreThank18;

// Conditional
if (age > 18) {
  ageMoreThank18 = true;
} else if ((age = 18)) {
  ageMoreThank18 = false;
} else {
  ageMoreThank18 = false;
}
console.log("Age is more than 18 : " + ageMoreThank18);

ageMoreThank18 = age > 18 ? true : false;
console.log("Age is more than 18 : " + ageMoreThank18);

// Loops

let i = 0;
while (i < 5) {
  console.log("i is now : " + i);
  i++;
}

for (i = 0; i < 5; i++) {
  console.log("i is now : " + i);
}

// Functions
function product(a, b) {
  return a * b;
}

let result = product(5, 4);
console.log(result);
