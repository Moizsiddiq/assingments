// Magicians: Make an array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

const magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
show_magicians(magicians);

// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding the phrase "the Great" to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + ' the Great';
  }
}

const magicians2: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
make_great(magicians2);
show_magicians(magicians2);

// Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with "the Great" added to each magician’s name.
function make_great2(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    greatMagicians.push(magicians[i] + ' the Great');
  }
  return greatMagicians;
}

const magicians3: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);

// Sandwiches: Write a function that accepts an array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
function make_sandwich(...items: string[]): void {
  console.log("Sandwich order:");
  for (let i = 0; i < items.length; i++) {
    console.log(`- ${items[i]}`);
  }
  console.log("Enjoy your sandwich!");
}

make_sandwich('lettuce', 'tomato', 'cheese');
make_sandwich('ham', 'mayo');
make_sandwich('turkey');

// Cars: Write a function that stores information about a car in an Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
function make_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, options: { [key: string]: any } } {
  const car: { manufacturer: string, model: string, options: { [key: string]: any } } = {
    manufacturer: manufacturer,
    model: model,
    options: {}
  };

  for (const option of options) {
    for (const key in option) {
      car.options[key] = option[key];
    }
  }

  return car;
}

const car = make_car('Toyota', 'Corolla', { color: 'blue' }, { sunroof: true });
console.log(car);


