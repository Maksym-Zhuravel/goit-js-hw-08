import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

if (currentTime) {
  player.setCurrentTime(currentTime);
}