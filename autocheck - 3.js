//Задача 1
/* const apartment = {
    imgUrl:"https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
};*/

// Задача 2
/* const apartment = {
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com"
  },
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};
*/
//Задача 3
/*const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line
 */

//Задача 4
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line

*/
//Задача 5
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Change code above this line

*/

//Задача 6
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted")

*/
//Задача 7
/*
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country : 'Jamaica',
  city : 'Kingston'

}
*/
//Задача 8
/*
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  name,
  price,
  image,
  tags
  // Change code above this line
};

*/
//Задача 9
/*
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName] : "henry.carter@aptmail.com",
  
[passwordInputName] : "jqueryismyjam",


  // Change code above this line
};
*/

//Задача 10
/*

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
  for (key in apartment){
  keys.push(key);
 values.push(apartment[key])
  };


*/
//Задача 11
/*
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if(apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}

*/



//Задача 12
/*
function countProps(object) {
  let propCount = 0;
  // Change code below this line
for (key in object){
  propCount += object.hasOwnProperty(key)
  console.log(propCount);}

  // Change code above this line
  return propCount;
}

*/
//Задача 13
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys){
  values.push(apartment[key])
}
*/
//Задача 14
/*
function countProps(object) {
  
  let propCount = 0;

  const keys = Object.keys(object)
propCount = keys.length
  console.log(propCount);
  return propCount;
  
}

*/
//Задача 15
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

*/
//Задача 16
/*
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const salariesProp = Object.values(salaries);
  for (const salary of salariesProp){
  
  totalSalary += salary}
  // Change code above this line
  return totalSalary;
}

*/
//Задача 17
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex)
  rgbColors.push(color.rgb)
}
*/
//Задача 18
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

  for (const product of products) {
    if(productName.includes(product.name)){
      // console.log(product.price)
      return(product.price)
    }
  
}
return null
  // Change code above this line
}

*/
//Задача 19
/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
const prop = [];
  for (const product of products) {
for (key in product) {
  if(propName === key) {
     prop.push(product[key]);
  } 
}
  }
return prop;


  // Change code above this line
}
*/

// Задача 20
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];


function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let total = 0
  for (const product of products) {
    if (product.name === productName) {
      total = product.price * product.quantity
    }
  }
  return console.log(total)

 

  // Пиши код выше этой строки
}
calculateTotalPrice("Radar")
*/

//Задача 21
/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow } = highTemperatures;
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;


// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 1;
console.log(meanTemperature)
*/
//Задача 22
/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
*/

//Задача 23
/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
*/
//Задача 24
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
*/
//Задача 25
/*
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
      tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon =  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }} = forecast;
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;
*/

//Задача 26
/*
// Change code below this line
function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;
const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
*/

//Задача 27
/*
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);;
const worstScore = Math.min(...scores);

console.log(bestScore)
console.log(worstScore)
*/
//Задача 28
/*
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
*/

//Задача 29
/*
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};
*/

// Задача 30
/*
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const newData = {completed, category, priority, ...data}
return newData;
  // Change code above this line
}
*/

//Задача 31
/*
// Change code below this line
function add(...args) {
  let total = 0;
  for (const val of args) {
   total += val
    
 }
  return total;
  // Change code above this line
}
*/



//Задача 32
/*
// Change code below this line
function addOverNum(firstNum, ...args) {
  let total = 0;

  for (const arg of args) {
    if(firstNum < arg)
    total += arg;
  }

  console.log (total);
  // Change code above this line
}
*/

//Задача 33
/*
// Change code below this line
function findMatches(first, ...args) {
  const matches = []; // Don't change this line
  for (const arg of args)
    if (first.includes(arg)) {
      matches.push(arg)
    }
console.log(matches)
  // Change code above this line
  return matches;
}
*/

//Задача 34
/*
const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
    
  },
  removeBook(bookName){
    return `Deleting book ${bookName}`
  },

updateBook(oldName, newName){
  return `Updating book ${oldName} to ${newName}`
},
  
  // Change code above this line
};

*/


//Задача 35
/*
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
const bookIndex = this.books.indexOf(oldName);

    this.books.splice(bookIndex, 1, newName);

console.log(this)
    // Change code above this line
  },
};
bookShelf.updateBook("The last kingdom", "Dune")
*/

//Задача 36
/*
const atTheOldToad = {
  // Change code below this line


  // Change code above this line
};
atTheOldToad.potions = [];
*/

//Задача 37
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
getPotions(){
  return this.potions
}
  // Change code above this line
};
*/

//Задача 38
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
this.potions.push(potionName);


    // Change code above this line
  },
};
*/

//Задача 39
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
const removedIndex = this.potions.indexOf(potionName);
    this.potions.splice(removedIndex, 1)


    // Change code above this line
  },
};
*/

//Задача 40
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
const oldNameIndex = this.potions.indexOf(oldName);
    this.potions.splice(oldNameIndex, 1, newName)

    // Change code above this line
  },
};
*/

//Задача 41
/*
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {


    if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;

    }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {

     
  for (let potion of this.potions) {
    

    if (potionName === potion.name) {

      this.potions.splice(this.potions.indexOf(potion), 1);

    }
  }
     `Potion ${potionName} is not in inventory!`;

  },
  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {

    

    if (oldName === potion.name) {

    potion.name = newName;
    }
    }

      return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
