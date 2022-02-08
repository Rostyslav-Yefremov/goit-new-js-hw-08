import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('iframe');
const LOCAL_KEY = 'videoplayer-current-time';

const player = new Player(vimeoPlayer);

const saveTimeInLocal = data => {
  localStorage.setItem(LOCAL_KEY, data.seconds);
};

player.on('timeupdate', throttle(saveTimeInLocal, 1000));

const stopTimeInVimeo = localStorage.getItem(LOCAL_KEY);

player.setCurrentTime(stopTimeInVimeo);
