//      Section 1: if / else Basics
/*
Q1. if statement kya hoti hai?
Ans: if condition check karti hai. Agar condition true ho to code execute hota hai.

Q2. else ka use kab hota hai?
Jab if condition false ho jaye tab else ka code chalta hai.

Q3. Positive number example:

Ans: let num = 5;

if (num > 0) {
  console.log("Positive");
}

Q4. Even/Odd program:

Ans: let num = 4;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

Q5. Program:

let x = 10;
if (x > 5) {
  console.log("Big");
} else {
  console.log("Small");
}

Ans:  Output: Big

Q6. Progrma:

let x = 2;
if (x > 5) {
  console.log("Yes");
} else {
  console.log("No");
}

Ans: Output: No

Q7.Ek program likho jo age check kare (18+ allowed).
Agar condition false ho to kya execute hota hai? 

Ans: Age check program:

let age = 20;

if (age >= 18) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}

//Agar condition false ho?
//else block execute hota hai.

//           Section 2: else if Ladder

Q8. else if kya hota hai?
Ans: Multiple conditions check karne ke liye use hota hai.

Q9. Kab use karte hain?
Ans: Jab 2 se zyada conditions ho.

Q10. Grade system program likho (A, B, C).
Output kya hoga?
Grade system:

let marks = 85;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else {
  console.log("C");
}

Ans: Output (marks = 75):
     B

Q11. Ek program likho jo number positive, negative ya zero check kare.

Ans: Positive/Negative/Zero:

let num = 0;

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

Q13. Multiple else if ka kya benefit hai?

Ans: Benefit:
     Multiple conditions easily handle hoti hain.

Q14. Kya multiple else ho sakte hain?

Ans: Nahi, sirf 1 else hota hai.


//      Section 3: Nested Conditions

Q15. Nested if kya hota hai?
Ans: if ke andar if

Q16. Example likho nested condition ka.
Output kya hoga?

Example:

let age = 20;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Allowed");
  }
}

Ans: Output:
        Allowed

Q17. Ek program likho login system ka (username + password check)?

Ans: Login system:

let username = "admin";
let password = "1234";

if (username === "admin") {
  if (password === "1234") {
    console.log("Login Success");
  } else {
    console.log("Wrong Password");
  }
} else {
  console.log("User not found");
}

Q18.Nested vs simple if mein difference?
Ans:  Nested vs simple if:

Nested → andar condition
Simple → direct condition

Q20. Deep nesting ka problem kya hota hai? 
Ans: Code complex ho jata hai (read karna mushkil)

Q21. Ek real-life example do nested condition ka.
Ans: Real example:
     ATM → PIN + balance check


//               Section 4: switch Statement

Q22. switch kya hota hai?
Ans: Multiple cases check karta hai.

Q23. Kab use karte hain?
Ans: Jab ek variable ke multiple fixed values ho.

Q24. Ek example likho day of week ka.
Output kya hoga?

Ans: Example:

let day = 1;

switch(day) {
  case 1:
    console.log("Mon");
    break;
  case 2:
    console.log("Tue");
    break;
}

Output (day = 2):
    Tue

Q25. break ka kya role hai?
Ans: break ka role:
    switch se bahar nikalta hai

Q26.Agar break na ho to kya hota hai?
Ans: next cases bhi run ho jate hain (fall-through)

Q27. default case kya hota hai?

Ans: default case:
     jab koi match na ho

Q28.switch vs if else difference? 
Ans: switch vs if:

switch → fixed values
if → logical conditions

//      Section 5: for Loop

Q29. for loop kya hota hai?
Ans: Repeat karne ke liye use hota hai

Q30.Syntax likho
Ans: Syntax:

for (start; condition; increment) {
}

Q31. 1 se 10 tak print karo.
Ans: 1–10 print Program:

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

Q32. Even numbers print karo (1–20)
Ans: Even numbers:

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

34.Output kya hoga?
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

Ans: Output:
1
2
3

Q35. Reverse loop likho (10 se 1)
Ans: Reverse loop Program:

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

Q36. Infinite loop kya hota hai?
Ans: Infinite loop:
    Jab condition kabhi false na ho

Q37.Ek loop likho jo array print kare. 

Ans:
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//       Section 6: while Loop

Q38. while loop kya hota hai?
Ans: Jab tak condition true ho loop chalta hai

Q39. for aur while mein difference?
Ans: Difference:
for → known iterations
while → unknown iterations

Q40. 1 se 5 print karo using while. 
Ans: 1–5 print Program:

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

Q41. Output kya hoga?
let i = 1;
while (i <= 3) {
console.log(i);
i++;
}

Ans: Output:
     1 2 3

Q42. Infinite while loop ka example do.
Ans:Infinite while:

while (true) {
  console.log("Loop");
}

Q43. Kab use karte hain?
Ans: Jab iterations unknown ho


//          Section 7: do...while Loop

Q44. do while kya hota hai?
Ans: Ek baar zaroor run hota hai

Q45. while aur do while mein difference?
Ans:Difference:
while → pehle check
do while → baad mein check

46. Output Kya hoga?

let i = 5;

do {
  console.log(i);
  i++;
} while (i < 5);

Ans: Output: 5

Q47. Ek example likho jahan do while useful ho.
Ans: Useful example:

let password;

do {
  password = prompt("Enter password");
} while (password !== "1234");


//               Section 8: break & continue

Q48. break kya karta hai?
Ans: loop stop kar deta hai

Q49. continue kya karta hai?
Ans: current iteration skip karta hai

Q50. Output kya hoga?

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

Ans: Output: 1 2

Q51. Output Kiya hoga?

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

Ans: Output: 1 2 4 5

Q52. break vs continue difference?
Ans: Difference:
break → loop khatam
continue → skip

Q53. Real example do dono ka.
Ans: Real example:

break → search mil gaya → stop
continue → invalid input skip


//       Section 9: Functions Basics

Q54. Function kya hota hai?
Ans: Reusable code block

Q55. Kyun use karte hain?
Ans: Code reuse + clean code

Q56. Simple function likho jo "Hello" print kare.
Ans: Hello function:

function sayHello() {
  console.log("Hello");
}

Q57. Function ka syntax likho.
Ans: Syntax:

function name() {
}

Q58. Function call kya hota hai?
Ans: function ko run karna

Q59. Output Kya hoga?

function test() {
  console.log("Hi");
}

test();

Ans:Output: Hi

//          Section 10: Parameters & Return

Q60. Parameter kya hota hai?
Ans: function input

Q61. Argument kya hota hai?
Ans: actual value

Q62. Function likho jo 2 numbers add kare.
Ans: Add function:

function add(a, b) {
  return a + b;
}

Q63. return kya hota hai?
Ans: value wapas deta hai

Q64. Output kya hoga?

console.log(add(2, 3));

Ans: Output: 5

Q65. Agar return na ho?
Ans: undefined milta hai

Q66. Ek function likho jo square return kare.
Ans: Square function:

function square(x) {
  return x * x;
}

Q67. return ke baad code chalega?
Ans: nahi chalta

//     Section 11: Default Parameters

Q68. Default parameter kya hota hai?
Ans: jab value na mile to default use ho

Q69. Syntax likho.
Ans: Syntax:

function name(param = value) {}

Q70. Output kya hoga?

function greet(name = "Guest") {
  console.log(name);
}

greet();

Ans: Output: Guest

Q71. greet("Ali");

Ans: Output: Ali

Q72.Default params ka benefit kya hai?
Ans: Benefit:
 Error avoid + flexible function

Q73.Ek function likho jisme default value ho. 
Ans: Example:

function multiply(a, b = 2) {
  return a * b;
}

Q74. Kya multiple default params ho sakte hain? 
Ans:  Haan possible hain.