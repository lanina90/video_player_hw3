const video = document.getElementById('video');
const pauseBtn = document.getElementById('pause');
const playBtn = document.getElementById('play');
const forwardBtn = document.getElementById('forward');
const rewindBtn = document.getElementById('rewind');
const volumeUpBtn = document.getElementById('volume-up');
const volumeDownBtn = document.getElementById('volume-down');
const videoLinks = document.querySelectorAll('.video-links button');


const savedVideo = localStorage.getItem('currentVideo');
const savedTime = localStorage.getItem('currentTime');

if (savedVideo) {
    video.src = savedVideo;
    video.currentTime = savedTime || 0;
}

pauseBtn.onclick = () => video.pause();
playBtn.onclick = () => video.play();
forwardBtn.onclick = () => video.currentTime += 10;
rewindBtn.onclick = () => video.currentTime -= 10;
volumeUpBtn.onclick = () => video.volume = Math.min(video.volume + 0.1, 1);
volumeDownBtn.onclick = () => video.volume = Math.max(video.volume - 0.1, 0);

videoLinks.forEach(link => {
    link.onclick = () => {
        video.src = link.dataset.src;
        localStorage.setItem('currentVideo', link.dataset.src);
        video.play();
    };
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('currentTime', video.currentTime);
});