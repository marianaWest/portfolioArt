const backgroundBox = document.getElementById("backgroundBox");
const bearBox = document.getElementById("bearBox");
const bearImage = document.getElementById("bearImage");
const caption = document.getElementById("caption");
const rollText = document.getElementById("rollText");
const work = document.getElementById("work");
const dot = document.getElementById("dot");
const blackout = document.getElementById("blackout");
const originalBearSrc = bearImage.src;

bearBox.addEventListener("mouseenter", () => {
  backgroundBox.style.backgroundImage =
    'url("../../../assets/medusa/bibbCountyAlabama.jpg")';
  caption.style.visibility = "visible";
  rollText.style.visibility = "visible";
  work.style.visibility = "hidden";
});

bearBox.addEventListener("mouseleave", () => {
  backgroundBox.style.backgroundImage =
    'url("../../../assets/medusa/fundoMeio.png")';
  bearImage.src = originalBearSrc;
  caption.style.visibility = "hidden";
  rollText.style.visibility = "hidden";
  work.style.visibility = "visible";
});

function moveDot() {
  let numTop = Math.random() * 10;
  let numLeft = Math.random() * 10;
  let topPosition = 50 + numTop;
  let leftPosition = 5 + numLeft;
  dot.style.top = topPosition + "%";
  dot.style.left = leftPosition + "%";
}

setInterval(moveDot, 500);

// Fade in blackout before leaving the page
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    const url = link.getAttribute("href");
    if (!url.startsWith("#") && url !== "") {
      // ignore anchors
      e.preventDefault();
      blackout.classList.add("active");
      setTimeout(() => {
        window.location.href = url;
      }, 600); // match transition duration
    }
  });
});

// Fade out blackout when new page loads
window.addEventListener("load", () => {
  blackout.classList.remove("active");
});
