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
//   const newNumbers = []
//   numbers.forEach(number => {
//     number % 2 === 0 ? newNumbers.push(number + value) : newNumbers.push(number)
   
//   });
//    return newNumbers
//   // Change code above this line
// }

// Задача 14

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => {
//   return planet.length;
// });

// Задача 15

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(title => title.title);

// Задача 16

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(allGenres => allGenres.genres);

//Задача 17

// Change code below this line
// const getUserNames = users => {
//     const names = users.map(names => names.name)
//   return names

//   };
//   // Change code above this line

//Задача 18

// // Change code below this line
// const getUserEmails = users => {
    
// const mails = users.map(emails => emails.email)
//   return mails;
//   };
//   // Change code above this line

// Задача 19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// const oddNumbers = numbers.filter(value => value % 2 !== 0);


// Задача 20

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(genres => genres.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );


//Задача 21

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);


//Задача 22

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//  const getUsers = users.filter(user => user.eyeColor === color);
//  return console.log(getUsers);;

// };

// getUsersWithEyeColor([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ], 'blue')


//Задача 23

// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//  const validAge = users.filter(user => user.age >= minAge && user.age <= maxAge);
//   return validAge

// };
// // Change code above this line

//задача 24

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//     const allFriends = users.filter(friend => friend.friends.includes(friendName))
// console.log(allFriends);
// };
// // Change code above this line

// Задача 25

// // Change code below this line
// const getFriends = (users) => {
//     const friends = users.flatMap(friend => friend.friends)
//     const uniqueFriends = friends.filter(
//  (friends, index, array) => array.indexOf(friends) === index)
//     console.log(uniqueFriends);
// };
// // Change code above this line

//Задача 26



// const getActiveUsers = (users) => {
//     activeUsers = users.filter(user => user.isActive === true)
//     console.log(activeUsers);
// };

//Задача 27

// const getInactiveUsers = (users) => {
//     inActiveUsers = users.filter(user => user.isActive === false)
//     console.log(inActiveUsers);
// };


//Задача 28

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

//Задача 29

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//    const userEmail = users.find(userWithemail => userWithemail.email === email);
//   return userEmail
// };
// // Change code above this line


//Задача 30

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

//Задача 31

// // Change code below this line
// const isEveryUserActive = (users) => {
//    const usersIsActive = users.every(user => user.isActive === true);
//   return usersIsActive;
// };
// // Change code above this line


//Задача 32

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 ===0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !==0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 ===0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !==0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 ===0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !==0);


// Задача 33

// // Change code below this line
// const isAnyUserActive = users => {
//    const usersIsActive = users.some(user => user.isActive === true);
//   return usersIsActive
// };
// // Change code above this line

//Задача 34

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, playtimes) => {
//   return previousValue + playtimes;
// }, 0);
// console.log(totalPlayTime);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

//Задача 35

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((total, averageTime) => {
//     return total + averageTime.playtime / averageTime.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);


// console.log(players.length);


//Задача 36

// Change code below this line
// const calculateTotalBalance = users => {
//    const sum = users.reduce((total, totalSum) => {
//      return total + totalSum.balance
//    }, 0);
//     return console.log(sum);
// };
// // Change code above this line


//Задача 37
// const getTotalFriendCount = users => {
//     const allFriends = users.reduce((total, friend) => {
//     return total + friend.friends.length
//     }, 0);
//     return console.log(allFriends);
// };


//Задача 38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();


//Задача 39

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a -b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b -a);

// Задача 40

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


//Задача 41

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating =[...books].sort((a, b) => b.rating - a.rating);

//Задача 42

// // Change code below this line
// const sortByAscendingBalance = users => {
//    const result = users.sort((a, b) => a.balance - b.balance);
//   return result;
// };
// // Change code above this line

//Задача 43

// // Change code below this line
// const sortByDescendingFriendCount = users => {
//    const result = [...users].sort((a, b) => b.friends.length - a.friends.length);
//   return console.log(result);
// };
// // Change code above this line



// Задача 44
// Change code below this line
// const sortByName = users => {
//   const result = [...users].sort((a, b) => a.name.localeCompare(b.name));
//   return console.log(result);;
// };
// // Change code above this line


//Задача 45

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].sort((a, b) => a.author.localeCompare(b.author)).filter(book => book.rating > MIN_BOOK_RATING).map(name => name.author);

//Задача 46

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//    const result = [...users].sort((a, b) => a.friends.length - b.friends.length).map(userName => userName.name)
//   return result
// };
// // Change code above this line

//Задача 47

// Change code below this line
// const getSortedFriends = users => {
//     const result = [...users].flatMap(firendName => firendName.friends).filter(
// (friendName, index, array) => array.indexOf(friendName) === index).sort()
    
//     console.log(result);
// };


//Задача 48

// const getTotalBalanceByGender = (users, gender) => {
//     const getTotalBalance = [...users].filter(genders => genders.gender === gender).reduce((total, allBalance) => {
//     return total + allBalance.balance
//     }, 0);
//     console.log(getTotalBalance);
// };
