let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playPause = document.getElementById("play-pause");
let action = document.getElementById("action");
let prev = document.getElementById("backward");
let next = document.getElementById("forward");
let songName = document.getElementById("song_name");
let artist = document.getElementById("artist");
let img = document.getElementById("poster"); 
let heart = document.getElementById("heart")

const songs = [
    {
        name: "audio 1.mp3",
        songName: "Future Design ",
        artist: "penguinmusic",
        image: "image 1.webp"
    },
    {
        name: "dont-talk-315229.mp3",
        songName: "Don't Talk",
        artist: "cosmonkey",
        image: "img 2.webp"
    }
    ,
    {
        name: "eona-emotional-ambient-pop-351436.mp3",
        songName: "EONA",
        artist: "Rockot",
        image: "img 3.webp"
    }
];

// Load initial song
let songIndex = 0;

const loadSong = (track) => {
    songName.textContent = track.songName;
    artist.textContent = track.artist;
    song.src = "audio/" + track.name;
    img.src = "assets/images/" + track.image;
};

const playMusic = () => {
    song.play();
    action.classList.remove("fa-play");
    action.classList.add("fa-pause");
};

const pauseMusic = () => {
    song.pause();
    action.classList.remove("fa-pause");
    action.classList.add("fa-play");
};

playPause.addEventListener("click", () => {
    if (song.paused) {
        playMusic();
    } else {
        pauseMusic();
    }
});

song.addEventListener("loadeddata", () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
});

song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

progress.addEventListener("change", () => {
    song.currentTime = progress.value;
    playMusic();
});

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

// Initial load
loadSong(songs[songIndex]);

 let a = 0
//heart color change 
heart.addEventListener("click" , ()=>{
    // heart.style.color = "red"
   
    if ( a == 0){
         heart.style.color = "red"  ;
         a = 1
    }else{
              heart.style.color = "  rgb(96, 96, 215)"  
     a = 0
    }
})