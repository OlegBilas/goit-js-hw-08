import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const serializatetData = localStorage.getItem('videoplayer-current-time');
const seconds = serializatetData ? JSON.parse(serializatetData).seconds : 0;

player
  .setCurrentTime(seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

const getTimeOfVideo = data => {
  return localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeupdate', throttle(getTimeOfVideo, 1000));
