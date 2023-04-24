const menuMobile = document.querySelector(".menu-mobile");
const iconMenu = document.querySelector(".icon-menu-mobile");
const iconClose = document.querySelector(".close-icon");

iconMenu.addEventListener("click", () => {
  menuMobile.style = `
        transform: translateX(0%);
    `;
});

iconClose.addEventListener("click", () => {
  menuMobile.style = `
          transform: translateX(-100%);
      `;
});
