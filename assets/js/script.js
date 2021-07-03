//Toggle menu functionality.
const toggleMenu = (toggleQuery, menuId) => {
  const toggle = document.querySelectorAll(toggleQuery);
  const menu = document.getElementById(menuId);
  const show = () => menu.classList.toggle("show");

  if (toggle && menu) {
    toggle.forEach((n) => n.addEventListener("click", show));
  }
};

toggleMenu("#nav-toggle", "nav-menu");
toggleMenu(".nav__link", "nav-menu");

//Scrolling functionality.
const scrollY = window.pageYOffset;

//Activates and deactivates links dependending on the Y position.
const scrollActive = () => {
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 350;

    this.scrollY >= sectionTop && this.scrollY < sectionTop + sectionHeight
      ? document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active")
      : document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active");
  });
};

window.addEventListener("scroll", scrollActive);

//Adds the header's box shadow if the Y position is over 100 pixels.
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY > 100
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

//Adds the scroll to top button if the Y position is over 600 pixels.
const scrollTop = () => {
  const scrollTop = document.getElementById("scroll-top");
  this.scrollY > 600
    ? scrollTop.classList.add("visible")
    : scrollTop.classList.remove("visible");
};

window.addEventListener("scroll", scrollTop);

//Theme and respective memory functionality.
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//Animate on Scroll Library
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  offset: -50,
});
