try {
  // console.log("My Utils");

  const videos = document.getElementsByTagName("video");

  // console.log({ videos });

  // for (const video of videos) {
  //   console.log({ video });
  // }

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const _incVideoTime = (inc) => {
    // console.log("_incVideoTime");
    for (const video of videos) video.currentTime += inc;
  };

  const _setVideoRate = (rate) => {
    // console.log("_setVideoRate");
    for (const video of videos) video.playbackRate = clamp(rate, 0.2, 16);
  };

  const _incVideoRate = (inc) => {
    // console.log("_incVideoRate");
    for (const video of videos)
      video.playbackRate = clamp(video.playbackRate * inc, 0.2, 16);
  };

  const _incVideoVolume = (inc) => {
    for (const video of videos) video.volume = clamp(video.volume + inc, 0, 1);
  };

  document.onkeydown = (event) => {
    // console.log("video keydown", event.key);
    switch (event.key) {
      case "q":
      case "Q":
        _incVideoVolume(-0.1);
        break;
      case "w":
      case "W":
        _incVideoVolume(0.1);
        break;
      case "a":
      case "A":
        _setVideoRate(1);
        break;
      case "s":
      case "S":
        _incVideoRate(0.5);
        break;
      case "d":
      case "D":
        _incVideoRate(2);
        break;
      case "z":
      case "Z":
        _incVideoTime(-3);
        break;
      case "x":
      case "X":
        _incVideoTime(1);
        break;
      case "v":
      case "V":
        _incVideoTime(5);
        break;
      case "b":
      case "B":
        _incVideoTime(30);
        break;
      default:
        break;
    }
  };
} catch (error) {
  console.error(error);
}
