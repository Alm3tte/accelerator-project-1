const videocontainer = document.querySelector('.description__video');
const videocover = videocontainer.querySelector('.description__img--video');
const videobutton = videocontainer.querySelector('.description__button');

const createVideo = () => {
  const video = document.createElement('iframe');

  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  video.setAttribute('title', 'YouTube video player');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  video.setAttribute('allowfullscreen', '');
  video.classList.add('description__video-player');

  videocontainer.appendChild(video);
};

const initVideoPlayer = () => {
  if (videocontainer && videocover && videobutton) {
    videobutton.addEventListener('click', (event) => {
      event.preventDefault();
      videocover.style.display = 'none';
      videobutton.style.display = 'none';
      createVideo();
    });
  }
};

initVideoPlayer();
