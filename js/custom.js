const hamBurger = document.querySelector("#hamBurger");
const sideBar = document.querySelector(".sideBar");
hamBurger.addEventListener("click", () => {
  sideBar.classList.toggle("smallSideBar");
});

const scrollToTop = document.querySelector(".scrollToTop");
scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const darkmode = document.getElementById("darkMode");
const header = document.querySelector("header");
const banner = document.querySelector("section.banner");
const colorChange = document.querySelectorAll(".colorChange");

darkmode.addEventListener("click", function () {
  darkmode.classList.toggle("active");
  if (this.classList.contains("active")) {
    header.style.background = "var(--black-color)";
    sideBar.style.background = "var(--black-color)";
    banner.style.background = "var(--black-color)";
    header.style.boxShadow = "1px 1px 0px grey";
    darkmode.style.border = "2px solid var(--light-grey)";
    for (let c = 0; c < colorChange.length; c++) {
      colorChange[c].style.color = "var(--light-grey)";
    }
  } else {
    header.style.background = "";
    sideBar.style.background = "";
    banner.style.background = "";
    header.style.boxShadow = "";
    darkmode.style.border = "";
    for (let c = 0; c < colorChange.length; c++) {
      colorChange[c].style.color = "";
    }
  }
});
