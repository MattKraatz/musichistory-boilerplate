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
  printOut += "<article><h2>" + songTitles[i] + "</h2>" + "<ul><li>" + songDetails[i] + "</li></ul></article>";
};

console.log(songTitles);
console.log(songDetails);
console.log(printOut);

document.getElementById("displayColumn").innerHTML = printOut;