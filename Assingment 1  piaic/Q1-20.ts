// Personal Message: Store a person’s name in a variable, and print a message to that person.
const personName: string = "Moiz";
console.log(`Hello ${personName}, Have a good day`);

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
const fullName: string = "Moiz sidd";
console.log(fullName.toLowerCase());  
console.log(fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase());  
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
const quote: string = 'A person who never made a mistake never tried anything new.';
const author: string = 'Albert Einstein';
console.log(`${author} once said, "${quote}"`);

// Famous Quote 2: Repeat the previous exercise, but this time store the famous person’s name in a variable called famousPerson. 
// Then compose your message and store it in a new variable called message. Print your message.
const famousPerson: string = 'Albert Einstein';
const message: string = `${famousPerson} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed.
// Then print the name after stripping the white spaces.
const nameWithWhitespace: string = "   Moiz sidd   \n\t";
console.log(nameWithWhitespace);  // Displays whitespace around the name
console.log(nameWithWhitespace.trim());  // Removes leading/trailing whitespace

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);  // Addition: 5 + 3 = 8
console.log(10 - 2);  // Subtraction: 10 - 2 = 8
console.log(2 * 4);  // Multiplication: 2 * 4 = 8
console.log(16 / 2);  // Division: 16 / 2 = 8

// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
const favoriteNumber: number = 10;
console.log(`My favorite number is ${favoriteNumber}.`);

//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
console.log(5 + 3);  // Addition: 5 + 3 = 8
console.log(10 - 2);  // Subtraction: 10 - 2 = 8
console.log(2 * 4);  // Multiplication: 2 * 4 = 8
console.log(16 / 2);  // Division: 16 / 2 = 8
/// second
const nameeWithWhitespace: string = "   Moiz sidd   \n\t";
console.log(nameeWithWhitespace);  // Displays whitespace around the name
console.log(nameeWithWhitespace.trim());  // Removes leading/trailing whitespace
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const friendNames: string[] = ["Moiz", "Monis", "talha"];
for (let i = 0; i < friendNames.length; i++) {
  console.log(friendNames[i]);  // 
}
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const greeting: string = "Hello";
for (let i = 0; i < friendNames.length; i++) {
  console.log(`${greeting}, ${friendNames[i]}!`);  
}
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items.
const favoriteTransportation: string[] = ["car", "motorcycle", "bicycle"];
for (let i = 0; i < favoriteTransportation.length; i++) {
  console.log(`I would like to own a ${favoriteTransportation[i]}.`);
}

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
const dinnerGuests: string[] = ["abdul moiz", "monis faheem", "Talha meo"];
for (let i = 0; i < dinnerGuests.length; i++) {
  console.log(`Dear ${dinnerGuests[i]}, you are invited to dinner. Please join us!`);
}
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// • Start with your program from the Guest List problem. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log(`${dinnerGuests[1]} cannot make it to the dinner.`);
dinnerGuests[1] = "Ahsan nasir";
for (let i = 0; i < dinnerGuests.length; i++) {
  console.log(`Dear ${dinnerGuests[i]}, you are invited to dinner. Please join us!`);
}
// More Guests: You just found a bigger dinner table, so now more space is available.
// • Start with your program from the Changing Guest List problem. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use push() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
console.log("Good news! We found a bigger dinner table.");
dinnerGuests.unshift("waqar");
dinnerGuests.splice(2, 0, "Osama");
dinnerGuests.push("yasir");
for (let i = 0; i < dinnerGuests.length; i++) {
  console.log(`Dear ${dinnerGuests[i]}, you are invited to dinner. Please join us!`);
}

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
// • Start with your program from the More Guests problem. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Sorry, we can only invite two people for dinner.");
while (dinnerGuests.length > 2) {
  const removedGuest = dinnerGuests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let i = 0; i < dinnerGuests.length; i++) {
  console.log(`Dear ${dinnerGuests[i]}, you are still invited to dinner. See you there!`);
}
dinnerGuests.length = 0; // Clearing the guest list
console.log(dinnerGuests);
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
const placesToVisit: string[] = ["Paris", "Tokyo", "Rome", "New York", "Sydney"];
console.log("Original Order:");
console.log(placesToVisit);
console.log("Alphabetical Order:");
console.log(placesToVisit.slice().sort());
console.log("Original Order (unchanged):");
console.log(placesToVisit);
console.log("Reverse Alphabetical Order:");
console.log(placesToVisit.slice().sort().reverse());
console.log("Original Order (unchanged):");
console.log(placesToVisit);
console.log("Reversed Order:");
console.log(placesToVisit.reverse());
console.log("Original Order (changed):");
console.log(placesToVisit);
console.log("Sorted in Alphabetical Order:");
console.log(placesToVisit.sort());
console.log("Sorted in Reverse Alphabetical Order:");
console.log(placesToVisit.sort().reverse());

// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
const invitedGuests: number = dinnerGuests.length;
console.log(`Number of people invited to dinner: ${invitedGuests}`);
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Array of Mountains
const mountains: string[] = ["Everest", "Kilimanjaro", "Matterhorn", "Denali"];
console.log("Mountains:", mountains);

