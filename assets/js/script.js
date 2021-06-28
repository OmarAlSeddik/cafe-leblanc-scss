const toggleMenu = (toggleId, menuId) => {
  const toggle = document.getElementById(toggleId);
  const menu = document.getElementById(menuId);
  const show = () => menu.classList.toggle("show");

  if (toggle && menu) {
    toggle.addEventListener("click", show);
  }
};

toggleMenu("nav-toggle", "nav-menu");
