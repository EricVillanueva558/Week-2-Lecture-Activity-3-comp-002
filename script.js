// Declare the variable and assign a value from 0-100
let myGrade = 85; // Modify this to test

// If/Else-If/Else statement to check the letter grade
if (myGrade >= 90) {
    console.log("A");
} else if (myGrade >= 80) {
    console.log("B");
} else if (myGrade >= 70) {
    console.log("C");
} else if (myGrade >= 60) {
    console.log("D");
} else {
    console.log("F"); // The else statement handles all grades 59 and below.
}

switch (true) {
    case (myGrade >= 90):
        console.log("A");
        break;
    case (myGrade >= 80):
        console.log("B");
        break;
    case (myGrade >= 70):
        console.log("C");
        break;
    case (myGrade >= 60):
        console.log("D");
        break;
    default:
        console.log("F");
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log("!"); // Output an exclamation point for odd numbers
    } else {
        console.log(i); // Output the number for even numbers
    }
}
