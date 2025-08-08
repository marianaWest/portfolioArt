const backgroundBox = document.getElementById("backgroundBox");
const bearImage = 'url("../../assets/medusa/urso.jpg")';
  const bearBox = document.getElementById("bearBox");

// window.addEventListener("DOMContentLoaded", () => {


//   if (!bearBox) {
//     console.error("bearBox not found");
//     return;
//   }

//   bearBox.style.backgroundImage = bearImage;
//   bearBox.style.height = "500px";

//   bearBox.style.border = "4px solid transparent";
//   bearBox.style.mask =
//     "radial-gradient(#000 0 0), radial-gradient(#0000, #000 99%) padding-box";
//   bearBox.style.maskComposite = "exclude";
// });

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
