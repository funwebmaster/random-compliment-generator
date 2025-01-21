// script.js

// Array of compliments
const compliments = [
    "You're an amazing friend!",
    "You have a great sense of humor!",
    "Your creativity is inspiring!",
    "You light up the room!",
    "You're a true problem solver!",
    "You have a kind heart!",
    "Your positivity is contagious!",
    "You're a great listener!",
    "You make the world a better place!",
    "You’re incredibly thoughtful!"
];

// Function to generate a random compliment
function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const complimentElement = document.getElementById('compliment');
    complimentElement.textContent = compliments[randomIndex];
}

// Add event listener to the button
document.getElementById('generate-btn').addEventListener('click', generateCompliment);

document.getElementById('generate-btn').addEventListener('click', () => {
    generateCompliment();

    const mascot = document.getElementById('mascot');
    mascot.classList.add('bounce');

    // Remove the bounce class after animation completes
    setTimeout(() => {
        mascot.classList.remove('bounce');
    }, 500); // Match the duration of the animation
});
