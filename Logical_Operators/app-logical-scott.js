// const password = prompt('Enter your password');
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid password.");
// }
// else {
//     console.log("Invalid password syntax");
// }


// // =====================
// // REVISITING AGE EXAMPLE
// // =====================

// // 0-4 free 
// // 5-10 $10 
// // 11-65 $20
// // 65+ free

// const age = 10;

// if (age >= 0 && age < 5 || age >= 65) {
//     console.log("Free");
// }
// else if (age >= 5 && age < 11) {
//     console.log("$10");
// }
// else if (age >= 11 && age < 65) {
//     console.log("$20");
// }
// else {
//     console.log("Invalid age.")
// }


// =====================
// // Using NOT (!) logical operator
// =====================

// const firstName = prompt("Enter your first name.");
// if (!firstName) {
//     firstName = prompt("Try again.");
// }

// =====================
// Using NOT (!) logical operator & COMBINING && and ||
// =====================

// const age = 45;
// if (!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("You're not an infant or senior.");
// }

// =====================
// SWITCH statement
// =====================
// const day = 7;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     default:
//         console.log("I don't know that.")
// }

// // =====================
// // SWITCH statement is better than the below alternative
// // =====================
// const day = 2;
// if (day === 1) {
//     console.log("Monday");
// }
// else if (day === 2) {
//     console.log("Tuesday");
// }
// else if (day === 3) {
//     console.log("Wednesday");
// }
// else if (day === 4) {
//     console.log("Thursday");
// }
// else if (day === 5) {
//     console.log("Friday");
// }
// else {
//     console.log("I don't know that")
// }

