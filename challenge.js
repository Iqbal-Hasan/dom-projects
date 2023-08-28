/*
TODO Problem 1 : (Done)
Write a function that takes two numbers as input and returns the sum of those numbers.

function sum(firstNumber, secondNumber) {
    if (typeof firstNumber!== 'number' || typeof secondNumber !== 'number') {
        return 'Please provide this function two numbers'
    }
    return `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
}
console.log(sum(1232,3000));


TODO Problem 2 : (Done)
Create an array of your favorite fruits. Write a function that checks if a given fruit is in the array and returns a message accordingly.

function checksTheString(string) {
  if (typeof string !== "string") {
    return 'Please give a string'
  }
  return arrayOfString.includes(string.toLowerCase());
}
let arrayOfString = ["banana", "apple", "orange", "dragon"];
console.log(checksTheString("Apple"));


TODO Problem 3 : (Done)
Create an object representing a student with properties like name, age, and grade. Write a function that displays the student's information.

function studentInformation(information) {
  return `Name : ${information.name}, Age : ${information.age}, Grade : ${information.grade}`;
}
let infromation = {
  name:'Gabimaru',
  age:17,
  grade:"A"
}
console.log(studentInformation(infromation));


TODO Problem 4 : (Done)
Write a function that takes an array of numbers and returns the largest number in the array.

function largestNumber(arr) {
  if (!Array.isArray(arr)) {
    return "provide array of number";
  }
  arr = arr.sort((a, b) => b - a);

  console.log(arr);
  return `largest number is ${arr[0]} and smallest number is ${
    arr[arr.length - 1]
  }`;
}

console.log(
  largestNumber([-12, 12, 1, 2, 3, 5, 6, 129, 10, 14, 233, 2324, 532, 253, 344])
);


TODO Problem 5 : (Done)
Create a loop that prints the numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


TODO Problem 6 : (Done)
Write a function that takes a number as input and prints "Fizz" if the number is divisible by 3, "Buzz" if divisible by 5, and "FizzBuzz" if divisible by both 3 and 5. Otherwise, print the number.

function namingNumber(number) {
  if (typeof number !== "number") {
    return "please provide me a number";
  } else if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return "No result for you";
  }
}

console.log(namingNumber(20));


TODO Problem 7 : (Done)
Create an array of names. Use a loop to print each name with a greeting message, like "Hello, [Name]!".

let arrayOfNames = ['google','facebook','instagram','whatsapp','apple','microsoft']

for (const company of arrayOfNames) {
  console.log(`Hello, ${company}!`)
}


TODO Problem 8 : (Done)
Write a function that takes an array of numbers and returns a new array with only the even numbers from the input array.

function evenNumber(arr) {
  let evenArray = [];
  if (!Array.isArray(arr)) {
    return "provide array of number";
  }
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 === 0) {
      evenArray.push(element);
    }
  }
  return evenArray;
}
console.log(
  evenNumber([1, 2, 3, 4, 5, 6, 12, 2342, 123343, 123, 12, 14, 12, 11, 145])
);


TODO Problem 9 : (Done)
Create an object representing a car with properties like make, model, and year. Write a function that displays the car's details in a formatted message.

function carInformation(car) {
  return `Name : ${car.name}, Model : ${car.model}, Year : ${car.year}`
}

let car = {
  name: 'Tesla',
  model: 'Y',
  year: 2012,
}
console.log(carInformation(car));


TODO Problem 10 : (Done)
Write a program that prompts the user for their age and, based on their age, displays a message like "You're a teenager", "You're an adult", or "You're a senior citizen".

let age = 60;
if (typeof age !== 'number') {
  console.log('Please provide a number');
} else if (age>0 && age <= 18) {
  console.log(`You're a teenager`);
} else if (age >= 50 && age <= 19){
  console.log(`You're an adult`);
}else{
  console.log(`You're a senior citizen`);
}


TODO Problem 11: Array Manipulation (Done)
Write a function that takes an array of numbers and returns a new array with the numbers squared. However, if a number is greater than 50, exclude it from the new array.

Problem 12: Object Manipulation
Create an array of objects, each representing a student with properties like name, age, and grades (an array of numbers). Write a function that calculates the average grade for each student and returns an array of objects with the student's name and their average grade.
Problem 13: Function Composition
Write a function that takes an array of numbers and returns a new array with each number doubled, then squared. In other words, each number in the new array should be the result of (number * 2) * (number * 2).
Problem 14: Object Inheritance
Create a base object called Vehicle with properties like make, model, and year. Then, create two child objects Car and Motorcycle that inherit from Vehicle. Add additional properties unique to each child object. Write a function that displays the details of a vehicle, regardless of whether it's a car or motorcycle.
Problem 15: Complex Conditionals
Write a program that prompts the user for their income and their age. Based on these inputs, determine and display their tax rate using the following rules:
If income is less than $10,000 and age is below 30, tax rate is 5%.
If income is between $10,000 and $50,000 (inclusive) and age is below 50, tax rate is 10%.
If income is above $50,000 or age is 50 and above, tax rate is 20%.
*/

// Write a function that takes an array of numbers and returns a new array with the numbers squared. However, if a number is greater than 50, exclude it from the new array.


function squaredNumber(arr) {
  if (!Array.isArray(arr)) {
    return `Please provide and array of number`
  }
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  }
}