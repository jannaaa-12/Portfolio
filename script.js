/* ------------------------------
   SCROLL CHICKEN FOLLOW
--------------------------------*/

const scrollChicken = document.getElementById("scrollChicken");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  let screenHeight = window.innerHeight;
  let docHeight = document.documentElement.scrollHeight;

  let ratio = scrollPos / (docHeight - screenHeight);
  scrollChicken.style.top = `${ratio * 80 + 10}%`;
});

/* ------------------------------
   MODAL IMAGE ENLARGEMENT
--------------------------------*/

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".expandable").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

/* ------------------------------
   BLOOPERS AUDIO
--------------------------------*/

const audio = document.getElementById("bloopersAudio");
document.getElementById("playBtn").onclick = () => audio.play();
document.getElementById("pauseBtn").onclick = () => audio.pause();
