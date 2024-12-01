const max = parseInt(prompt("Enter the maximum number "), 10);
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Enter your guess (or type 'quit' to exit): ");

while (true) {
    if (guess.toLowerCase() === "quit") {
        console.log("User quit");
        break;
    }

    guess = parseInt(guess, 10);

    if (guess === random) {
        console.log("Congrats! You win! The correct number was " + random);
        break;
    } else if (guess < random) {
        guess = prompt("Hint: Your guess was too small. Try again: "); // Update guess with new input
    } else {
        guess = prompt("Hint: Your guess is too large. Try again: "); // Update guess with new input
    }
}