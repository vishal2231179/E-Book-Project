const texts = [
  "Turning Pages, Broadening Horizons!",
  "Explore, Read, and Discover Your Vista!",
  "Uncover New Vistas on Every Page!",
  "Your Digital Gateway to Endless Stories!"
];

const colors = ["#FFD700", "#00BFFF", "#FF69B4", "#7CFC00", "#FF4500"]; // New color palette


let index = 0;
let charIndex = 0;
const typingSpeed = 100; // Typing speed in ms
const erasingSpeed = 50; // Erasing speed in ms
const delayBetweenTexts = 2000; // Delay before starting the next text
const textElement = document.getElementById("text");
const textContainer = document.getElementById("text-container");

function typeText() {
  if (charIndex < texts[index].length) {
    textElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (charIndex > 0) {
    textElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, erasingSpeed);
  } else {
    index = (index + 1) % texts.length; // Move to the next text
    changeTextColor(); // Change text color
    setTimeout(typeText, typingSpeed);
  }
}

function changeTextColor() {
  textElement.style.color = colors[index % colors.length]; // Change text color
}

// Initialize the first text and color
changeTextColor();
typeText();