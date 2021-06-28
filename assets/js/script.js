const scrollY = window.pageYOffset;

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

const scrollActive = () => {
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop;

    this.scrollY > sectionTop && this.scrollY < sectionTop + sectionHeight
      ? document
          .querySelector(".nav__menu a[href=" + sectionId + "]")
          .classList.add("active")
      : document
          .querySelector(".nav__menu a[href=" + sectionId + "]")
          .classList.add("active");
  });
};

window.addEventListener("scroll", scrollActive);

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY > 200
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);
