// Lấy phần tử cần áp dụng hiệu ứng

function setAnimate(classElement, animate, speed) {
  var element = document.querySelector(classElement);
  // Thiết lập hàm xử lý sự kiện cuộn trang
  function handleScroll() {
    var elementTop = element.getBoundingClientRect().top;
    var elementBottom = element.getBoundingClientRect().bottom;
    var viewportTop =
      window.innerHeight || document.documentElement.clientHeight;

    // Nếu phần tử xuất hiện trong viewport, thêm lớp fade-in
    if (elementTop < viewportTop && elementBottom >= 0) {
      console.log(
        (element.className = element.className.concat(
          ` animate__animated ${animate} animate__${speed}`
        ))
      );
      window.removeEventListener("scroll", handleScroll);
    }
  }

  // Thêm sự kiện cuộn trang và gọi hàm xử lý
  window.addEventListener("scroll", handleScroll);
  handleScroll();
}
