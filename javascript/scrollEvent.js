const barBottom = document.querySelector(".bottom-bar");
const barTop = document.querySelector(".header-top");

var lastScrollPosition = window.pageYOffset;

window.addEventListener("scroll", function () {
  if (window.innerWidth < 789 && window.pageYOffset > 0) {
    var currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > 55) {
      if (currentScrollPosition > lastScrollPosition) {
        barTop.style = `
        position: fixed;
        transform: translateY(-100%);
        left: 0;
        right: 0;
        `;
      } else {
        barTop.style = `
        position: fixed;
        left: 0;
        right: 0;
        transform: translateY(0%);
        background-color: #222222`;
      }
    } else {
      barTop.style = `  
      position: absolute;
      top: 0;
      left: 0;
      right: 0;`;
    }

    if (currentScrollPosition > lastScrollPosition) {
      barBottom.style = "transform: translateY(0%);";
    } else {
      barBottom.style = "transform: translateY(200%);";
    }
    lastScrollPosition = currentScrollPosition;
  } else {
    barTop.style = "";
  }
});
// window.addEventListener('scroll', function() {
//     if (window.innerWidth < 789 && window.pageYOffset > 0) {
//       // Thực hiện hành động tại đây
//     }
//   });
