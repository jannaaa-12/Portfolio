// =========================================
// SCROLL CHICKEN MOVEMENT
// =========================================

// Moves the chicken up and down depending on scroll position
const scrollChicken = document.getElementById("scrollChicken");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;
  const scrollable = Math.max(docHeight - winHeight, 1);
  const ratio = scrollY / scrollable;

  const minTop = 60; // pixels from top
  const maxTop = winHeight - 140; // leave some room at bottom
  const newTop = minTop + (maxTop - minTop) * ratio;

  scrollChicken.style.top = `${newTop}px`;
});

// =========================================
// IMAGE ZOOM (NOT FULLSCREEN)
// =========================================

// Opens a small zoom overlay when any .expandable image is clicked
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".expandable").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("show");
  });
});

// Close the zoom overlay when user clicks anywhere on the overlay
if (modal) {
  modal.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}

// =========================================
// BLOOPERS AUDIO
// =========================================

// Uses the native audio controls to show timeline.
// No extra JS needed besides confirming the element exists.
const bloopersAudio = document.getElementById("bloopersAudio");
if (bloopersAudio) {
  // Placeholder in case you want to add custom behavior later.
}
