const backgroundBox = document.getElementById("backgroundBox");
const bearImage = 'url("../../assets/medusa/urso.jpg")';
  const bearBox = document.getElementById("bearBox");


bearBox.addEventListener("mouseenter", () => {
  console.log("entered");
  bearBox.style.backgroundColor = "red";
  backgroundBox.style.backgroundImage =
    'url("../../assets/medusa/bibbCountyAlabama.jpg")';
});

bearBox.addEventListener("mouseleave", () => {
  console.log("left");
  bearBox.style.backgroundColor = "yellow";
  backgroundBox.style.backgroundImage =
    'url("../../assets/medusa/fundoMeio.png")';
});
