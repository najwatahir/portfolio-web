const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

const hamMenu = document.querySelector(".ham-menu");

const navLink = document.querySelector(".nav-links");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navLink.classList.toggle("active");
});

navLink.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    hamMenu.classList.remove("active");
    navLink.classList.remove("active");
  }
});

