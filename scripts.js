// Data handling and publishing from Exercise 2

var songTitles = [];
var songDetails = [];
var printOut = "";
var songs = [];

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
  displayColumn.innerHTML += `
    <article>
      <h2>${inputs[0].value}</h2>
        <ul><li>
      by ${inputs[1].value} on the album ${inputs[2].value}
        </li></ul>
    <button class="delete" onclick="deleteSong()">Delete</button>
    </article>`
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
}

// XML data request and parser

function dataLoader () {
  var songs = JSON.parse(xhr.responseText).songs;
  displaySongs(songs)
}

var xhr = new XMLHttpRequest();
xhr.addEventListener('load',dataLoader);
xhr.open('GET','songs.json');
xhr.send();

// Song printing function

function displaySongs (songs) {
  for (var j = 0; j < songs.length; j++){
    displayColumn.innerHTML += `
      <article>
        <h2>${songs[j].title}</h2>
          <ul><li>
        by ${songs[j].artist} on the album ${songs[j].album}
          </li></ul>
      <button class="delete" onclick="deleteSong()">Delete</button>
      </article>`
  }
}

// Delete button function

function deleteSong() {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode)
}

// Add songs button

function moreSongs() {
  function dataLoader2 () {
    var songs = JSON.parse(xhr2.responseText).songs;
    displaySongs(songs)
  }

  var xhr2 = new XMLHttpRequest();
  xhr2.addEventListener('load',dataLoader2);
  xhr2.open('GET','moresongs.json');
  xhr2.send();
}
