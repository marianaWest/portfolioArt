let modal = document.getElementById("worksModal");
let openMedusa = document.getElementById("openMedusa");
let closeModal = document.getElementById("closeModal");

openMedusa.onmouseover = function () {
  modal.style.display = "block";
};

// not working
closeModal.onclick = function () {
  modal.style.display = "none";
  console.log("close");
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

