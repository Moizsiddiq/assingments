// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const book: { title: string, author: string, year: number } = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925
};
console.log(book);

// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
const fruits: string[] = ['apple', 'banana', 'orange'];
console.log(fruits[3]);  //  this Produces an index error, as there is no element at index 3

// Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test.
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'honda'? I predict False.");
console.log(car === 'honda');

console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);

console.log("Is car.length <= 10? I predict True.");
console.log(car.length <= 10);

// Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
const alien_color: string = 'green';
if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}

// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
const alienColor: string = 'yellow';
if (alienColor === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting the alien.");
}

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.
const alienColor2: string = 'red';
if (alienColor2 === 'green') {
  console.log("Congratulations! You earned 5 points.");
} else if (alienColor2 === 'yellow') {
  console.log("Congratulations! You earned 10 points.");
} else if (alienColor2 === 'red') {
  console.log("Congratulations! You earned 15 points.");
}

// Stages of Life: Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:
// If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// If the person is age 65 or older, print a message that the person is an elder.
const age: number = 25;
if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// Favorite Fruit: Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// Make an array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as "You really like bananas!"
const favorite_fruits: string[] = ['banana', 'apple', 'orange'];
if (favorite_fruits.includes('banana')) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes('apple')) {
  console.log("You really like apples!");
}
if (favorite_fruits.includes('orange')) {
  console.log("You really like oranges!");
}
if (favorite_fruits.includes('kiwi')) {
  console.log("You really like kiwis!");
}
if (favorite_fruits.includes('mango')) {
  console.log("You really like mangoes!");
}

// Hello Admin: Make an array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
// If the username is 'admin', print a special greeting, such as "Hello admin, would you like to see a status report?"
// Otherwise, print a generic greeting, such as "Hello Eric, thank you for logging in again."
const usernames: string[] = ['admin', 'moiz', 'talha', 'monis', 'ahsan'];
for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === 'admin') {
    console.log(`Hello admin, would you like to see a status report?`);
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}

// No Users: Add an if test to the Hello Admin problem to make sure the list of users is not empty.
// If the list is empty, print the message "We need to find some users!"
// Remove all of the usernames from your array, and make sure the correct message is printed.
usernames.length = 0;
if (usernames.length === 0) {
  console.log("We need to find some users!");
}

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users.
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
const current_users: string[] = ['moiz', 'monis', 'talha', 'ahsan', 'osama'];
const new_users: string[] = ['waqar', 'umair', 'asim', 'yasir', 'ali'];
for (let i = 0; i < new_users.length; i++) {
  if (current_users.includes(new_users[i].toLowerCase())) {
    console.log(`Sorry, the username "${new_users[i]}" is already taken. Please enter a new username.`);
  } else {
    console.log(`The username "${new_users[i]}" is available.`);
  }
}

// Ordinal Numbers: Ordinal numbers indicate their position in an array, such as 1st or 2nd. Most ordinal numbers end in "th", except 1, 2, and 3.
// Store the numbers 1 through 9 in an array.
// Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  let ordinal = '';
  if (numbers[i] === 1) {
    ordinal = 'st';
  } else if (numbers[i] === 2) {
    ordinal = 'nd';
  } else if (numbers[i] === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }
  console.log(`${numbers[i]}${ordinal}`);
}

// Pizzas: Think of at least three kinds of your favorite pizza.
// Store these pizza names in an array, and then use a for loop to print the name of each pizza.
// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza, you should have one line of output containing a simple statement like "I like pepperoni pizza."
// Add a line at the end of your program, outside the for loop, that states how much you like pizza.
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as "I really love pizza!"
const favorite_pizzas: string[] = ['pepperoni', 'margherita', 'vegetarian'];
for (let i = 0; i < favorite_pizzas.length; i++) {
  console.log(`I like ${favorite_pizzas[i]} pizza.`);
}
console.log("I really love pizza!");

// Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// Modify your program to print a statement about each animal, such as "A dog would make a great pet."
// Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as "Any of these animals would make a great pet!"
const animals: string[] = ['dog', 'cat', 'rabbit'];
for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i]} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size: string, message: string): void {
  console.log(`The shirt size is ${size} and it says "${message}".`);
}
make_shirt('M', 'I love TypeScript');

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads "I love TypeScript".
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size: string = 'L', message: string = 'I love TypeScript'): void {
  console.log(`The shirt size is ${size} and it says "${message}".`);
}
make_shirt2(); // Large shirt with default message
make_shirt2('M'); // Medium shirt with default message
make_shirt2('S', 'Hello World'); // Small shirt with custom message

// Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as "Karachi is in Pakistan."
// Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city: string, country: string = 'Unknown'): void {
  console.log(`${city} is in ${country}.`);
}
describe_city('Karachi', 'Pakistan');
describe_city('London', 'United Kingdom');
describe_city('Paris');

// City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this: "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Rome', 'Italy'));

// Album: Write a function called make_album() that builds an Object describing a music album.
// The function should take in an artist name and an album title, and it should return an Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
function make_album(artist: string, album: string, tracks?: number): { artist: string, album: string, tracks?: number } {
  const albumObj: { artist: string, album: string, tracks?: number } = {
    artist: artist,
    album: album
  };
  if (tracks) {
    albumObj.tracks = tracks;
  }
  return albumObj;
}
console.log(make_album('Taylor Swift', 'Fearless'));
console.log(make_album('Ed Sheeran', 'Divide', 12));
console.log(make_album('Adele', '25', 10));
