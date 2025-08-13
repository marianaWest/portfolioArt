const backgroundBox = document.getElementById("backgroundBox");
const bearBox = document.getElementById("bearBox");
const bearImage = document.getElementById("bearImage");
const caption = document.getElementById("caption");
const originalBearSrc = bearImage.src;

bearBox.addEventListener("mouseenter", () => {
  backgroundBox.style.backgroundImage =
    'url("../../assets/medusa/bibbCountyAlabama.jpg")';
  caption.style.visibility = "visible";
});

bearBox.addEventListener("mouseleave", () => {
  backgroundBox.style.backgroundImage =
    'url("../../assets/medusa/fundoMeio.png")';
  bearImage.src = originalBearSrc;
  caption.style.visibility = "hidden";
});
