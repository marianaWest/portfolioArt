const blackout = document.getElementById("blackout");
const eye1 = document.getElementById("eye1");
const rollText1 = document.getElementById("rollText1");

window.addEventListener("load", () => {
  blackout.classList.remove("active");
});

eye1.addEventListener("click", () => {
  rollText1.style.visibility = "visible";
  console.log("clicked");
});
