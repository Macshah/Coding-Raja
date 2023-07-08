const container=document.getElementById('container');
const play=document.getElementById('play');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const song=document.getElementById('song');
const progressInfo=document.getElementById('progress-info');
const progressBar=document.getElementById('progress-bar');
const title=document.getElementById('title');
const artist=document.getElementById('artist');
const album=document.getElementById('album');
const genre=document.getElementById('genre');
const artwork=document.getElementById('artwork');
const curr=document.querySelector('#currTime');
const dur=document.querySelector('#durtime');

const songs=['No Roots'];
let songIndex=0;

loadsong(songs[songIndex]);

function loadsong(song){
    title.innerText = song;
    song.src=`Source/${song}.mp3`;
    artwork.src=`Source/${song}.jpg`;
    artwork.classList.add('song-img');
    
}

play.addEventListener('click',()=>{
    const isPlaying = container.classList.contains('play')
    if(isPlaying){
        pauseM();
    }
    else{
        playM();
    }
});

function playM(){
    container.classList.add('play')
    play.innerHTML='&#9634;';
    song.play();
    artwork.classList.add('song-img');
}
function pauseM(){
    container.classList.remove('play')
    container.classList.add('pause');
    play.innerHTML='&#9654';
    song.pause();
    artwork.classList.remove('song-img');
}

prev.addEventListener('click',prevSong);
next.addEventListener('click',nextSong);

function prevSong(){
    const currentTime = song.currentTime;
    let newTime = currentTime - 10; // Go back 10 seconds
  
    if (newTime < 0) {
      newTime = 0; // Ensure the new time doesn't go below 0
    }
  
    song.currentTime = newTime;
    playM();
}

function nextSong(){
    const currentTime = song.currentTime;
    let newTime = currentTime + 10; // Go back 10 seconds
  
    if (newTime < 0) {
      newTime = 0; // Ensure the new time doesn't go below 0
    }
  
    song.currentTime = newTime;
    playM();
}

song.addEventListener('timeupdate',updateProgress);

function updateProgress(e){
  const duration=song.duration;
  const currentTime=song.currentTime;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  curr.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
}

progressInfo.addEventListener('click',setProgress)

function setProgress(e) {
    const width = this.clientWidth;
    const clickX=e.offsetX;
    const duration=song.duration;

    song.currentTime=(clickX / width) * duration;
  }
  
song.addEventListener('loadedmetadata', function() {
    const totalMinutes = Math.floor(song.duration / 60);
    const totalSeconds = Math.floor(song.duration % 60);
    dur.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
  });

  song.addEventListener('ended',playM)



