/* ============================================================
   CUSTOM AUDIO CONTROLS FOR THE BLOOPERS SECTION
   ============================================================ */

// Get the audio element and the custom controls
const audio = document.getElementById("bloopers-audio");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const progress = document.getElementById("audio-progress");

// Start playing the audio when the Play button is pressed
playBtn.addEventListener("click", () => {
  audio.play();
});

// Pause the audio in its current position when the Pause button is pressed
pauseBtn.addEventListener("click", () => {
  audio.pause();
});

// Update the custom progress bar based on the current playback time
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + "%";
  }
});

// Reset the progress bar when the audio finishes
audio.addEventListener("ended", () => {
  progress.style.width = "0%";
});

/* ============================================================
   CHICKEN SCROLL INDICATOR BEHAVIOR
   ============================================================ */

// Element representing the chicken on the right
const chicken = document.getElementById("chicken-helper");

// List of all sections so the chicken can jump to the next one when clicked
const sections = Array.from(document.querySelectorAll("main section"));

/* Helper to smoothly scroll to a specific vertical position */
function smoothScrollTo(y) {
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

/* Update the chicken's vertical position so it reflects the scroll position */
function updateChickenPosition() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;

  const scrollable = Math.max(docHeight - winHeight, 1);
  const ratio = scrollTop / scrollable;

  const minOffset = 60;
  const maxOffset = winHeight - 60;
  const newTop = minOffset + (maxOffset - minOffset) * ratio;

  chicken.style.top = `${newTop}px`;
}

// Move the chicken whenever the user scrolls
window.addEventListener("scroll", updateChickenPosition);

// Initial position when the page loads
window.addEventListener("load", updateChickenPosition);

/* When the chicken is clicked, scroll smoothly to the next section */
chicken.addEventListener("click", () => {
  const currentScroll = window.scrollY || window.pageYOffset;
  let nextSectionTop = null;

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    const absoluteTop = rect.top + currentScroll;
    if (absoluteTop > currentScroll + 10) {
      nextSectionTop = absoluteTop;
      break;
    }
  }

  // If there is a next section, scroll to it; otherwise go back to the top
  if (nextSectionTop !== null) {
    smoothScrollTo(nextSectionTop);
  } else {
    smoothScrollTo(0);
  }
});
