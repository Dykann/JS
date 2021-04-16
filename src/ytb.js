function getDuration() {
  const videos = document.querySelectorAll(
    ".style-scope ytd-thumbnail-overlay-time-status-renderer"
  );

  const toArr = [...videos];

  const getTIME = toArr
    .slice(0, 4)
    .map((video) => {
      return video.innerText.split(":");
    })
    .map((video) => video.map((time) => parseFloat(time)));

  const totalSec = getTIME
    .map((video) => video[0] * 60 + video[1])
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  const min = Math.floor(totalSec / 60);
  const sec = totalSec - min * 60;
  const duration = `${min} minutes ${sec} secondes`;

  if (sec < 10) {
    const duration = `${min} minutes 0${sec} secondes`;
    return duration;
  } else {
    return duration;
  }
}

getDuration();
