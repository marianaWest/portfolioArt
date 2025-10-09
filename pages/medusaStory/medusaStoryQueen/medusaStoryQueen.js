const blackout = document.getElementById("blackout");
const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");
const rollText = document.getElementById("rollText");
const rollText1 = document.getElementById("rollText1");
const eyeClosedSrc = "../../../assets/closedEye.svg";
const eyeOpenSrc = "../../../assets/openEye.svg";
const eye1Img = document.getElementById("eye1Img");
const eye2Img = document.getElementById("eye2Img");
let eyeOpen = true;
let currentEyeImgSrc = eyeOpenSrc;

window.addEventListener("load", () => {
  blackout.classList.remove("active");
});

eye1.addEventListener("click", () => {
  eyeOpen ? (eye1Img.src = eyeClosedSrc) : (eye1Img.src = eyeOpenSrc);
  eyeOpen
    ? (rollText.style.visibility = "visible")
    : (rollText.style.visibility = "hidden");
  eyeOpen = !eyeOpen;
  return eyeOpen;
});

eye2.addEventListener("click", () => {
  eyeOpen ? (eye2Img.src = eyeClosedSrc) : (eye2Img.src = eyeOpenSrc);
  eyeOpen
    ? (rollText1.style.visibility = "visible")
    : (rollText1.style.visibility = "hidden");
  eyeOpen = !eyeOpen;
  return eyeOpen;
});
