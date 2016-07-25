// Data handling and publishing from Exercise 2

var songTitles = [];
var songDetails = [];
var printOut = "";
var songs = [];
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.push("Yonkers > by Tyler, the Creator on the album Goblin");
songs.unshift("Under Control > by The Internet on the album Ego Death");

for (i in songs) {
  songs[i] = songs[i].replace(/>/g,"-");
  songs[i] = songs[i].replace("!","");
  songs[i] = songs[i].replace("*","");
  songs[i] = songs[i].replace("@","");
  songs[i] = songs[i].replace("(","");
};

for (i in songs) {
  songTitles[i] = songs[i].slice(0,(songs[i].indexOf("-")-1));
  songDetails[i] = songs[i].slice((songs[i].indexOf("-")+2),songs[i].length);
  document.getElementById("displayColumn").innerHTML += "<article><h2>" + songTitles[i] + "</h2>" + "<ul><li>" + songDetails[i] + "</li></ul></article>";
};

// Adding click event to all a tags, calling SPA Handler function

var links = document.querySelectorAll("a")

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", spaHandler)
}

function spaHandler(e) {
  if (e.target.hash === "#addMusic") {
    listMusic.classList.add("hidden");
    addMusic.classList.remove("hidden")
  } else if (e.target.hash === "") {
    addMusic.classList.add("hidden");
    listMusic.classList.remove("hidden")
  }
}

// Adding click event to Add Music button and writing any input to the DOM

addButton.addEventListener("click", addInput);

function addInput() {
  var inputs = document.querySelectorAll("input");
  songTitles.push(inputs[0].value);
  songDetails.push("by " + inputs[1].value + " on the album " + inputs[2].value);
  var i = songTitles.length - 1;
  document.getElementById("displayColumn").innerHTML += "<article><h2>" + songTitles[i] + "</h2>" + "<ul><li>" + songDetails[i] + "</li></ul></article>";
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
}
