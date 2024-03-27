var play = document.getElementById('playbtn');
var music = document.getElementById('audio1');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var previous = document.getElementById('Previous');
var next = document.getElementById('next');
var img = document.querySelector('img');

var songs = [
    {
        id: 'img2',
        name: 'song1',
        title: 'Sham Dhaley',
        artist: 'Faizu'
    },

    {
        id: 'img1',
        name: 'song2',
        title: 'Bin Tere Sanam',
        artist: 'Jassi Shaerwal'
    },

    {
        id: 'img4',
        name: 'song3',
        title: 'Naino ki Jo Batt',
        artist: 'Altamash Afridi'
    },

    {
        id: 'img3',
        name: 'song4',
        title: 'Mashup Sad Songs',
        artist: 'Yaseer Desai'
    }
];

var currentIndex = 0;

var loadSong = () => {
    title.innerText = songs[currentIndex].title;
    artist.innerText = songs[currentIndex].artist;
    music.src = `./mp3/${songs[currentIndex].name}.mp3`;
    img.src = `./img/${songs[currentIndex].id}.jpg`;
};

loadSong(); // Initial loading of the song

play.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        play.classList.replace('fa-play', 'fa-pause');
        img.classList.add('anime');
    } else {
        music.pause();
        play.classList.replace('fa-pause', 'fa-play');
        img.classList.remove('anime');
    }
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(); // Load the next song
    if (!music.paused) {
        play.classList.replace('fa-play', 'fa-pause');
        img.classList.add('anime');
    }
    music.play(); // Play the next song
});




Previous.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(); // Load the previous song
    if (!music.paused) {
        play.classList.replace('fa-play', 'fa-pause');
        img.classList.add('anime');
    }
    music.play(); // Play the previous song
});









