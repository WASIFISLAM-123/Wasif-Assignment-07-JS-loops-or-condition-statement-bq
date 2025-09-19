// CONDITIONAL STATEMENTS Q/A //

// 16) Take a number and check if it is positive, negative, or zero ?

let number = 5;
if (number > 3) {
    console.log("Ans:16")
    console.log("Number is Positive");
} else if (number < 1) {
    console.log("Number is Negative");
} else {
    console.log("Number is Zero");
}

// 17) Check if a number is even or odd ?

let numbers = 7;
if (numbers % 3 === 0) {
    console.log("Ans:17")
    console.log("Even Number");
} else {
    console.log("Ans:17")
    console.log("Odd Number");
}

// 18) Print the largest of three numbers using if-else ?

let a = 10, b = 90, c = 50;
if (a >= b && a >= c) {
    console.log("Ans:18")
    console.log("Largest Number = " + a);
} else if (b >= a && b >= c) {
    console.log("Ans:18")
    console.log("Largest Number = " + b);
} else {
    console.log("Ans:18")
    console.log("Largest Number = " + c);
}

// 19) Check if a given year is a leap year or not ?

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Ans:19")
    console.log("Leap Year");
} else {
    console.log("Ans:19")
    console.log("Not a Leap Year");
}

// 20) Take a number between 1–7 and print the day of the week (1 = Monday, etc.) ?

let day = 5;
if (day === 1) {
    console.log("Ans:20")
    console.log("Monday");
} else if (day === 2) {
    console.log("Ans:20")
    console.log("Tuesday");
} else if (day === 3) {
    console.log("Ans:20")
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Ans:20")
    console.log("Thursday");
} else if (day === 5) {
    console.log("Ans:20")
    console.log("Friday");
} else if (day === 6) {
    console.log("Ans:20")
    console.log("Saturday");
} else if (day === 7) {
    console.log("Ans:20")
    console.log("Sunday");
} else {
    console.log("Invalid Number (Enter 1-7)");
}


