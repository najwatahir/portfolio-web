const year = (document.getElementById("year").textContent =
  new Date().getFullYear());

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

const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  fetch("https://formspree.io/f/mleyznva", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("There was a problem with the submission.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was a problem with the submission but your message is sent. Thank you!");
    });
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
