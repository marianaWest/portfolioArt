const blackout = document.getElementById("blackout");
const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");
const rollText = document.getElementById("rollText");
const rollText1 = document.getElementById("rollText1");
const eyeClosedSrc = "../../../assets/closedEye.svg";
const eye1Img = document.getElementById("eye1Img");

window.addEventListener("load", () => {
  blackout.classList.remove("active");
});

eye1.addEventListener("click", () => {
  rollText1.style.visibility = "visible";
  eye1Img.src = eyeClosedSrc;
});

eye2.addEventListener("click", () => {
  rollText.style.visibility = "visible";
});
