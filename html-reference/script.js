// DOM selection
const form = document.getElementById("demoForm");

// Event handling
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    alert("Form submitted!");
});

// Dynamic DOM
const newPara = document.createElement("p");
newPara.textContent = "This text was added by JavaScript.";
document.body.appendChild(newPara);

// Timer example
setTimeout(() => {
    console.log("2 seconds passed");
}, 2000);
