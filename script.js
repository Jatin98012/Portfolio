// Typing effect for home section
const typing = document.getElementById("typing");
const phrases = ["a Web Developer.", "a JavaScript Enthusiast.", "a Problem Solver."];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function loopTyping() {
  typing.textContent = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(loopTyping, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loopTyping, isDeleting ? 50 : 100);
}

loopTyping();

// Handle contact form (no backend - just clear the form)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});
