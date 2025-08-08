const backgroundBox = document.getElementById("backgroundBox");
const bearBox = document.getElementById("bearBox");
const bearImage = document.getElementById("bearImage");
const originalBearSrc = bearImage.src;
const newBearSrc = "../../assets/medusa/sem_urso.jpg";

bearBox.addEventListener("mouseenter", () => {
  backgroundBox.style.backgroundImage =
    'url("../../assets/medusa/bibbCountyAlabama.jpg")';
  bearImage.src = newBearSrc;
  //   bearImage.remove();
});

bearBox.addEventListener("mouseleave", () => {
  backgroundBox.style.backgroundImage =
    'url("../../assets/medusa/fundoMeio.png")';
  bearImage.src = originalBearSrc;
});
