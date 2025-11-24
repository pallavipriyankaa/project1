// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `Line 1
Line 2
Line 3`;
console.log(multiLine);

const firstName = "John", lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

// 2. Arrow Functions & this
const square = n => n * n;
console.log(square(5));

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
// undefined due to lexical this
obj.test();

const objFixed = {
  value: 50,
  test() { console.log(this.value); }
};
objFixed.test();

// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };
console.log(productCopy);

const a = { x: 1 }, b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(1, 5, 3));

// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

const info = {};
console.log(info?.user?.details);

// 5. Scoping
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError

// const prevents reassignment but not mutation

// 6. Ternary Operator
let speed;
speed = kmph > 60 ? "Fast" : "Normal";

const status = age => (age >= 18 ? "Adult" : "Minor");

const numberType = n => n > 0 ? "Positive" : n === 0 ? "Zero" : "Negative";

// 7. Spread, Rest & Arrays
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

a2 = ["x", "y"]; b2 = ["z"];
const combined = [...a2, ...b2];
console.log(combined);

const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));

// 8. Object Destructuring & Shorthand
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

const id2 = 101, role2 = "admin";
const user2 = { id2, role2 };
console.log(user2);

const name3 = "Sam", age3 = 25;
const person = {
  name3,
  age3,
  greet() {
    console.log(`Hello ${this.name3}`);
  }
};
person.greet();

// 9. Template Literals
console.log(`Today is ${new Date().toDateString()}`);

const NAME = "Alice", SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

// 10. Arrow Function Shorthands
const add = (x, y) => x + y;
const isAdult = age => age >= 18;
const double = n => n * 2;

// 11. Spread Operator
const arrClone = [...nums];
console.log(arrClone);

const arrStart = [100, ...nums];
console.log(arrStart);

const obj1 = { a: 1 }, obj2 = { a: 2, b: 3 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// 12. Optional Chaining
const userX = {
  name: "Alex",
  address: { city: "Bangalore" }
};
console.log(userX?.address?.city);
console.log(userX?.job?.title);

const safeObj = {};
console.log(safeObj?.data?.value);