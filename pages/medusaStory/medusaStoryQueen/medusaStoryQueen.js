const blackout = document.getElementById("blackout");
const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");
const eye3 = document.getElementById("eye3");
const rollText = document.getElementById("rollText");
const rollText1 = document.getElementById("rollText1");
const rollText2 = document.getElementById("rollText2");
const eyeClosedSrc = "../../../assets/closedEye.svg";
const eyeOpenSrc = "../../../assets/openEye.svg";
const eye1Img = document.getElementById("eye1Img");
const eye2Img = document.getElementById("eye2Img");
const eye3Img = document.getElementById("eye3Img");
let eye1Open = true;
let eye2Open = true;
let eye3Open = true;
let currentEyeImgSrc = eyeOpenSrc;

window.addEventListener("load", () => {
  blackout.classList.remove("active");
});

eye1.addEventListener("click", () => {
  eye1Open ? (eye1Img.src = eyeClosedSrc) : (eye1Img.src = eyeOpenSrc);
  eye1Open
    ? (rollText.style.visibility = "visible")
    : (rollText.style.visibility = "hidden");
  eye1Open = !eye1Open;
  return eye1Open;
});

eye2.addEventListener("click", () => {
  eye2Open ? (eye2Img.src = eyeClosedSrc) : (eye2Img.src = eyeOpenSrc);
  eye2Open
    ? (rollText1.style.visibility = "visible")
    : (rollText1.style.visibility = "hidden");
  eye2Open = !eye2Open;
  return eye2Open;
});

eye3.addEventListener("click", () => {
  eye3Open ? (eye3Img.src = eyeClosedSrc) : (eye3Img.src = eyeOpenSrc);
  eye3Open
    ? (rollText2.style.visibility = "visible")
    : (rollText2.style.visibility = "hidden");
  eye3Open = !eye3Open;
  return eye3Open;
});
