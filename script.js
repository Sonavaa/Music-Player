"use strict";

const numberOfSongs = document.getElementById("numberOfSongs");
const totalDuration = document.getElementById("totalDuration");
const playList_songs = document.querySelector(".songs");

const playing_song = document.getElementById("song");
const playing_song_img = document.querySelector(".image")
const playing_song_name = document.getElementById("song-name")
const playing_song_artist = document.getElementById("artist")

const current_time = document.querySelector(".current-time")
const total_time = document.querySelector(".total-time")

const previous_btn = document.getElementById("previous")
const play_pause_btn = document.getElementById("play-pause")
const next_btn = document.getElementById("next")


let index = 0;
let isPlaying = false;

const displayHeadingInfo = () => {
  numberOfSongs.textContent = `${songs.length} songs ·`;

  const allDurations = songs.map((s) => {
    const [minutes, seconds] = s.duration.split(":");
    console.log(minutes, seconds);

    return minutes * 60 + +seconds;
  });

  const totalSeconds = allDurations.reduce(
    (total, seconds) => (total += seconds)
  );
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  totalDuration.textContent = `${minutes}m ${String(seconds).padStart(2, 0)}s`;
};

const displayPlayList = () => {
  playList_songs.innerHTML = "";

  songs.forEach((song, index) => {
    const songName = song.name
      .split("-")
      .map((songName) => songName[0].toUpperCase() + songName.slice(1))
      .join(" ");

    playList_songs.innerHTML += `
<div class="song">
  <div class="left-side">
    <span id="number">${index + 1}</span>
    <span>${songName}</span>
  </div>
  <span id="duration">${song.duration}</span>
  </div>
`;
  });
};

  const displayPlayingSong = () =>{
    playing_song_img.innerHTML = `
    <img src="./assets/images/${songs[index].name}.jpeg" alt="">`
    playing_song_name.textContent = `${songs[index].title}`
    playing_song_artist.textContent =  `${songs[index].artist}`
    playing_song.src = `./assets/audio/${songs[index].name}.mp3`
  }

  const playSong = () => {
    playing_song.play();
    isPlaying = true;
    play_pause_btn.src = "./assets/icons/pause.svg"
  }

  const pauseSong = () => {
    playing_song.pause();
    isPlaying = false;
    play_pause_btn.src = "./assets/icons/play_arrow.svg"
  }

play_pause_btn.addEventListener("click", () => {
if (isPlaying){
  pauseSong()
}
else{
  playSong()
}
})


previous_btn.addEventListener("click", () => {
    if(index > 0)
    {
    song.index = index--;
    }
    else{
      song.index = songs.length - 1
    }
    displayPlayingSong()
    playSong()
})

next_btn.addEventListener("click", () => {
  if(index<songs.length-1)
  {
  song.index = index++;
  }
  else{
    song.index = 0
  }
  displayPlayingSong()
  playSong()
})

window.addEventListener("keydown",  function(event){
  if (event.code === "Space") {
    if(isPlaying){
      pauseSong()
    }
    else{
      playSong()
    }
}
})

window.addEventListener("keydown",  function(event){
  if (event.code === "ArrowRight") {
    if(index < songs.length-1)
    {
    song.index = index++;
    }
    else{
      song.index = 0
    }
    displayPlayingSong()
    playSong()
}
})

window.addEventListener("keydown",  function(event){
  if (event.code === "ArrowLeft") {
    if(index > 0)
    {
    song.index = index--;
    }
    else{
      song.index = songs.length - 1
    }
    displayPlayingSong()
    playSong()
}
})



displayHeadingInfo();
displayPlayList();
displayPlayingSong();
