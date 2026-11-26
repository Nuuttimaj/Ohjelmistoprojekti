"use strict";

const sword = new Weapon("Sword", 6, 4);
const player = new Player("Bellaaja", 100); // Tähän jotenkin että pelaajan nimi tulee muuttujasta?
const goblin = new Monster("Hemogoblin", 20, 10);

let combatEnd = false;

function nextRoom() {
  window.location.href = "/Navigation/navigation.html";
}

// Tämä jos pelaaja kuolee
function menu() {
  window.location.href = "/Menu/menu.html";
}

function attack() {
  if (sword.Hit()) {
    const isDefeated = goblin.takeDamage(sword.damage);
    console.log(`${goblin.name} took damage, Goblin HP is now: ${goblin.HP}`);
    if (isDefeated) {
      console.log("Äijä delas");
      document.getElementById("continue-btn").style.display = "";
      return;
    }
  } else {
    const PlayerDefeat = player.takeDamage(goblin.deals);
    console.log(`You swing your sword but missed! Player HP: ${player.HP}`);
    if (PlayerDefeat) {
      console.log("Ai mun olkapää! Kuolit");
      document.getElementById("menu-btn").style.display = "";
    }
  }
}
