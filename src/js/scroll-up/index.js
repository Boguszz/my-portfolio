const goTopBtn = document.querySelector('.buton-up');

window.addEventListener('scroll', onTrackScroll);
goTopBtn.addEventListener('click', onBackToTop);

function onTrackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('is-show');
  }

  if (scrolled < coords) {
    goTopBtn.classList.remove('is-show');
  }
}

function onBackToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -30);
    setTimeout(onBackToTop, 0);
  }
}
