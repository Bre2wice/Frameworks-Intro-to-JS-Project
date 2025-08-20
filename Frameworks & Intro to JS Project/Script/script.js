// ---------------------------
// 1. Email Validation
// ---------------------------
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

// ---------------------------
// 2. Random Character Generator
// ---------------------------
const characters = ["Mage", "Knight", "Elf", "Fox Spirit"];

function getRandomCharacter() {
  const index = Math.floor(Math.random() * characters.length);
  return characters[index];
}

// Display a featured character on homepage if an element exists
const featuredCharElement = document.getElementById("featured-character");
if (featuredCharElement) {
  featuredCharElement.textContent = getRandomCharacter();
}

// ---------------------------
// 3. RPG Table Data
// ---------------------------
const rpgPlayers = [
  { user: "Mage_0011", level: 12, hp: 150, mana: 300, weapon: "Staff" },
  { user: "Knight_0012", level: 15, hp: 300, mana: 50, weapon: "Sword" },
  { user: "Elf_0013", level: 10, hp: 180, mana: 200, weapon: "Bow" },
  { user: "Fox Spirit_0014", level: 8, hp: 120, mana: 250, weapon: "Daggers" },
];

// Populate RPG table dynamically
const tableBody = document.querySelector("table tbody");
if (tableBody) {
  tableBody.innerHTML = ""; // Clear existing rows
  rpgPlayers.forEach((player) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${player.user}</td>
      <td>${player.level}</td>
      <td>${player.hp}</td>
      <td>${player.mana}</td>
      <td>${player.weapon}</td>
    `;
    tableBody.appendChild(row);
  });
}

// ---------------------------
// 4. Feedback / Join Us Form
// ---------------------------
let feedback = [];

const joinForm = document.querySelector("form");
if (joinForm) {
  joinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const character = document.getElementById("character").value;
    const message = document.getElementById("message").value.trim();

    if (
      !name ||
      !validateEmail(email) ||
      character === "Select your favorite"
    ) {
      alert("Please fill out all fields correctly!");
      return;
    }

    const userFeedback = { name, email, character, message };
    feedback.push(userFeedback);

    alert(
      `Welcome to Crystal Dream! Your request has been submitted, ${name}.`
    );
    joinForm.reset();

    // Optional: Log feedback array to console
    console.log(feedback);
  });
}

// ---------------------------
// 5. Character Customization
// ---------------------------
let characterObj = { name: "Dreamer", hair: "Blue", level: 1 };

function updateHairColor(newColor) {
  characterObj.hair = newColor;
  return `Hair color updated to ${newColor}`;
}

// ---------------------------
// 6. Crystal Upgrade Costs
// ---------------------------
const upgrades = [100, 200, 300];

function getTotalCrystalCost() {
  return upgrades.reduce((total, cost) => total + cost, 0);
}

// Optional console logs for testing
console.log("Random featured character:", getRandomCharacter());
console.log("Total Crystal Cost:", getTotalCrystalCost());
console.log("Initial Character:", characterObj);
