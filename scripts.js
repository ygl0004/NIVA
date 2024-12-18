// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carrusel_imagen");
  const productInfos = document.querySelectorAll(".info_producto");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    productInfos[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
    productInfos[currentIndex].classList.add("active");
  }

  setInterval(showNextImage, 8000); // Cambia la imagen cada 3 segundos

  // Código existente para el encabezado
  const header = document.getElementById("encabezado");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
