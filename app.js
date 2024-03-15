// Objectives:
//   Use for loops to iterate a specific number of times.
//   Use for of loops to iterate through iterable data-like strings.
//   Use while loops to iterate based on a condition.
//   Use the break and continue statements to control loop flow.
//   For each of the activities, decide whether it is best to use for, for of, or while loops to implement the solution.

// Part 1: Fizz Buzz
//   To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this -
//   experiment with what you think is the most efficient.
//   Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
//   Accomplish the following:
//     Loop through all numbers from 1 to 100.
//     If a number is divisible by 3, log “Fizz.”
//     If a number is divisible by 5, log “Buzz.”
//     If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//     If a number is not divisible by either 3 or 5, log the number.

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log(i, "Fizz");
  } else if (i % 5 === 0) {
    console.log(i, "Buzz");
  } else {
    console.log(i);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Part 2: Prime Time:
// Write a script that accomplishes the following:
//  Declare an arbitrary number, n.
//  Create a loop that searches for the next prime number, starting at n and incrementing from there.
//  As soon as you find the prime number, log that number and exit the loop.
//  Continuing with the example above, if n is equal to 4, your loop should log 5.
//  Similarly, if n is 5, it should log 7, and if n is 9, it should log 11.
//  Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.

let n = 32; // Starting number

// Start looking for a prime number immediately after n
for (let currentNumber = n + 1; ; currentNumber++) {
  // Infinite loop, we'll break out manually
  let isPrime = true; // Assume currentNumber is prime until proven otherwise

  // Check divisibility by all numbers from 2 to currentNumber - 1
  for (let divisor = 2; divisor < currentNumber; divisor++) {
    if (currentNumber % divisor === 0) {
      // currentNumber is divisible by divisor, so it's not prime
      isPrime = false;
      break; // No need to check further divisors
    }
  }

  if (isPrime) {
    // currentNumber passed all checks and is prime
    console.log(currentNumber); // Log the prime number
    break; // Exit the loop after finding the first prime number
  }

  // If currentNumber wasn't prime, the loop continues with the next number
}

// Part 3: Feeling Loopy
//   As a final task, solve the following practical problem regarding string processing.
//   Loop through the characters of a given CSV string.
//   Store each “cell” of data in a variable.
//   When you encounter a comma, move to the next cell.
//   When you encounter the “\r\n” sequence, move to the next “row.”
//   Log each row of data.

//   You do not need to format the data, the following works well.
//   console.log(cell1, cell2, cell3, cell4);
//   You can make the following assumptions:
//   There will only be 4 cells per row.
//   There will be no escaped characters other than “\n”.

//   Use the example string provided above to test your program.
//   Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
//   Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

let dataGroup =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Split the data into rows using the newline character as a delimiter
let rows = dataGroup.split("\n");

// A for loop to go through each row:
for (let i = 0; i < rows.length; i++) {
  // Here we split each row into cells using the comma as a delimiter
  let cells = rows[i].split(",");

  // Assuming there are 4 cells per row, log the cells
  // If there could be a different number of cells, you could dynamically log them or use console.log(cells);
  console.log(cells[0], cells[1], cells[2], cells[3]);
}
