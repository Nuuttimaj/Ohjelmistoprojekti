"use strict";

const sword = new Weapon("Sword", 6, 4);
const player = new Player("Player", 100); // Pelaajan nimi tulee muuttujasta oletusarvoisesti Player
const goblin = new Monster("Hemogoblin", 20, 10);

let combatEnd = false;

function nextRoom() {
  window.location.href = "/Navigation/navigation.html";
}

// Tämä jos pelaaja kuolee
function menu() {
  window.location.href = "/Menu/menu.html";
}

document.getElementById("playerHP").innerText = `player HP: ${player.HP}`;
document.getElementById("goblinHP").innerText = `Goblin HP: ${goblin.HP}`;

function attack() {
  if (sword.Hit()) {
    const isDefeated = goblin.takeDamage(sword.damage);
    document.getElementById("goblinHP").innerText = `player HP: ${goblin.HP}`;
    console.log(`${goblin.name} took damage, Goblin HP is now: ${goblin.HP}`); // Vain konsoliin tulostuvaa

    if (isDefeated) {
      console.log("Äijä delas");
      document.getElementById("continue-btn").style.display = "";
      return;
    }
  } else {
    const PlayerDefeat = player.takeDamage(goblin.deals);
    document.getElementById("playerHP").innerText = `player HP: ${player.HP}`;
    console.log(`You swing your sword but missed! Player HP: ${player.HP}`); // Vain konsoliin tulostuvaa

    if (PlayerDefeat) {
      console.log("Ai mun olkapää! Kuolit");
      document.getElementById("menu-btn").style.display = "";
    }
  }
}
