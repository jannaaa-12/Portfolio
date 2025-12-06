/* ============================================================
   CUSTOM AUDIO PLAYER LOGIC FOR BLOOPERS SECTION
   ============================================================ */

/* Grab elements from the HTML */
const audio = document.getElementById("bloopers-audio");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const progress = document.getElementById("audio-progress");

/* Play the audio when Play is clicked */
playBtn.addEventListener("click", () => {
  audio.play();
});

/* Pause the audio and reset when Pause is clicked */
pauseBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  progress.style.width = "0%";
});

/* Update progress bar while audio plays */
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percentage + "%";
  }
});
