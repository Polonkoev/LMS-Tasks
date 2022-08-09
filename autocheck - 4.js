//Задача 1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

//Задача 2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }


//Задача 3

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
  
// });


//Задача 4
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//             return (makePizza(pizzaName))
//         }
//         else {
//             return (onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`))
//         }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);


//Задача 5
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//    orderedItems.forEach(function (number) {
//     totalPrice += number
  
//     });

//   // Change code above this line
//   return totalPrice;
// }

//Задача 6

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//  numbers.forEach(numbers => {
//      if (numbers > value) {
//         filteredNumbers.push(numbers)
        
//     }
//  });

//   // Change code above this line
//   console.log (filteredNumbers);
// }
// filterArray([1, 2, 3, 4, 5], 3)

//Задача 7

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(firstArray => {
//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray);
//     }
//   });
                     

//   return commonElements;
//   // Change code above this line
// }


//Задача 8

// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

//Задача 9

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//   quantity * pricePerItem;
// ;
// // Change code above this line

// Задача 10

// // Change code below this line
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line

//Задача 11

// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }


//Задача 12

// Change code below this line
// const  getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

//Задача 13
// function changeEven(numbers, value) {
//   // Change code below this line
//     let result = []
//     let newNumbers = []
//     numbers.forEach(element => {
//         if (element % 2 === 0) {

//             result.push(numbers.indexOf(element))
//         }
//         newNumbers.push(numbers.splice(result, 0, value))
//     });
//     console.log(newNumbers)
//     console.log(numbers)
//     console.log(result)
// }

 


// changeEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)