// let random = Math.random() + 1.0;
// if (random < 1.5) {
//     console.log(`Your number is ${random}; that's LESS than 1.5.`);
// }
// else if (random >= 1.5) {
//     console.log(`Your number ${random} is MORE than or equal to 1.5.`);
// }

// const dayOfWeek = prompt("What day of the week is it today?").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("It's Monday!");
// }
// else if (dayOfWeek === 'saturday') {
//     console.log("Saturdays are caturdays!");
// }
// else if (dayOfWeek === 'tuesday') {
//     console.log('Tuesdays are usually work days.');
// }
// else {
//     console.log("It's Wed., Thu., Fri., or Sun., or you entered invalid data.")
// }

// 0 - 5 free admission
// 6 - 10 child $10
// 11 - 64 adult $20
// 65+ senior $10 

// const age = 72;

// if (age <= 5) {
//     console.log("You get in for free.");
// }
// else if (age <= 10) {
//     console.log("You're a child. Please pay $10")
// }
// else if (age <= 64) {
//     console.log("You're an adult. Please pay $20");
// }
// else {
//     console.log("You're a senior. Please pay $10");
// }

//Password must be 6+ characters
//Password cannot include spaces

// const password = prompt('Please enter a new password.');
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('Valid password.');
//     }
//     else {
//         console.log('Password cannot contain spaces.');
//     }
// }
// else {
//     console.log('Password too short.');
// } 

const num = 103;

if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}