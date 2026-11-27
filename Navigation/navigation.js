function nextRooms(roomNumber){
    window.location.href = "/Combat/combat.html" // change url to combat
    if (roomNumber == 1){
        document.getElementById("goblinImage").scr = "/Pictures/goblin2.png"
    }
    else if (roomNumber == 2){
        document.getElementById("goblinImage").src = "/Pictures/goblin3.png"
    }
    else if (roomNumber == 3){
        document.getElementById("goblinImage").src = "/Pictures/goblin4.png"
    }

}