
// Adding click event to all a tags, calling SPA Handler function

var links = $('a');

for (var i = 0; i < links.length; i++) {
  $(links[i]).click(spaHandler);
}

function spaHandler(e) {
  if (this.hash === '#addMusic') {
    $(listMusic).addClass('hidden');
    $(addMusic).removeClass('hidden');
    $(links).removeClass('active');
    $(links[1]).addClass('active');
  } else if (this.hash === '') {
    $(addMusic).addClass('hidden');
    $(listMusic).removeClass('hidden');
    $(links).removeClass('active');
    $(links[0]).addClass('active');
  } else if (this.hash === '#profile') {
    $(links).removeClass('active');
    $(links[2]).addClass('active');
  }
}

// Adding click event to Add Music button and writing any input to the DOM

$(addButton).click(addInput);

function addInput() {
  var inputs = $('input');
  $(displayColumn).append(`
    <article>
      <h2>${inputs[0].value}</h2>
        <ul><li>
      by ${inputs[1].value} on the album ${inputs[2].value}
        </li></ul>
    <button class='delete' onclick='deleteSong()'>Delete</button>
    </article>`);
  for (i in inputs) {
    inputs[i].value = '';
  }
}

// Printing function for JSON

function displaySongs (songs) {
  for (var j = 0; j < songs.length; j++){
    $(displayColumn).append(`
      <article>
        <h2>${songs[j].title}</h2>
          <ul><li>
        by ${songs[j].artist} on the album ${songs[j].album}
          </li></ul>
      <button class='delete' onclick='deleteSong()'>Delete</button>
      </article>`);
  }
}

// Delete button function

function deleteSong() {
  $(event.target.parentNode).remove();
}

// XML data request and parser

$.getJSON('src/songs.json')
  .then(data => data.songs)
  .then(displaySongs);

// Add songs button

var extraSongs = $.getJSON('src/moresongs.json').then(data => data.songs);

function moreSongs() {
  extraSongs.then(displaySongs);
  $('#more').prop('disabled',true);
}

$('#more').click(moreSongs);
