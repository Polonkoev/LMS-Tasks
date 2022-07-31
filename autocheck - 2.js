//Задача 22
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // numbers.push(i)
//     for (let i = min; i <= max; i += 1){
//         numbers.push(i)
//     }
//     console.log(numbers)
//     //return numbers;
// }
// createArrayOfNumbers(15, 35)

// Задача 23
// function filterArray(numbers, value) {
   
//    let newNumbers = []
// for(let i = 0; i < numbers.length; i += 1)
// if(numbers[i] > value) {
// newNumbers.push(numbers[i])
// }
// return newNumbers;

  
// }




//Задача 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return(fruits.includes(fruit)); // Change this line
// }



//Задача 25
// function getCommonElements(array1, array2) {

// let result = []
//     for (let i = 0; i < array1.length; i += 1){
        
//         if (array2.includes(array1[i])) {
//             result.push(array1[i])
//         }
//         console.log(result)
// }


// }
// getCommonElements([1, 3, 5], [0, 8, 5, 3])


// Задача 26

// function calculateTotalPrice(order) {
//   let total = 0;
  

//   for (let i of order) {
//     total += i;
//   }

  
//     console.log(total);
// }
// calculateTotalPrice([164, 48, 291])

// Задача 27

// function filterArray(numbers, value) {
  
//   const filteredNumbers = [];

//   for (let i of numbers) {
//     const number = i;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
  
// }


//Задача 28
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;



//Задача 29

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let result = [];
//   for (let i = start; i <= end; i += 1)
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   console.log(result);
//   // Change code above this line
// }
// getEvenNumbers(2, 5);

//Задача 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// Задача 31
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// Задача 32
// function includes(array, value) {
//   let res = array.slice();
//   let ggg = false;
//   for (let i = 0; i < array.length; i += 1) {
//     if (res[i] === value) {
//       ggg = res[i];

//     }
//   }
//   console.log(ggg === value);
// }

// includes([1, 2, 3, 4, 5], 3);
