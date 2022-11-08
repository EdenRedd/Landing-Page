const btnhamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");

btnhamburger.addEventListener("click", function () {
  console.log("open hamburger");

  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});
