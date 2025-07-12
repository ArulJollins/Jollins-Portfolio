function adjustCarouselHeight() {
  const activeItem = document.querySelector('.carousel-item.active');
  const carouselInner = document.querySelector('.carousel-inner');

  if (activeItem && carouselInner) {
    carouselInner.style.height = activeItem.offsetHeight + 'px';
  }
}

window.addEventListener('load', adjustCarouselHeight);
window.addEventListener('resize', adjustCarouselHeight);

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('#carouselExampleControls');
  if (carousel) {
    carousel.addEventListener('slide.bs.carousel', adjustCarouselHeight);
    carousel.addEventListener('slid.bs.carousel', adjustCarouselHeight);
  }
});

