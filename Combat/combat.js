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

function combatStatus() {
  console.log(`Player HP: ${player.HP} and ${goblin.name} HP: ${goblin.HP}`);
}

function attack() {
  console.log(`Player HP: ${player.HP} and ${goblin.name} HP: ${goblin.HP}`);
}
