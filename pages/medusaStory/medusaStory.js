const backgroundBox = document.getElementById("backgroundBox");
const box = document.getElementById("hoverBox");

box.addEventListener("mouseenter", () => {
  console.log("Mouse entered!");
  backgroundBox.style.backgroundImage =
    'url("../../assets/medusa/agua-viva.png")';
});

box.addEventListener("mouseleave", () => {
  console.log("Mouse left!");
  backgroundBox.style.backgroundImage =
    'url("../../assets/medusa/fundoMeio.png")';
});
