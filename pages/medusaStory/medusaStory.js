const backgroundBox = document.getElementById("backgroundBox");
const bearUrl = 'url("../../assets/medusa/urso.jpg")';
const bearBox = document.getElementById("bearBox");
const bearImage = document.getElementById("bearImage");

bearBox.addEventListener("mouseenter", () => {
  backgroundBox.style.backgroundImage =
    'url("../../assets/medusa/bibbCountyAlabama.jpg")';
  bearImage.remove();
});

bearBox.addEventListener("mouseleave", () => {
  backgroundBox.style.backgroundImage =
    'url("../../assets/medusa/fundoMeio.png")';
});
