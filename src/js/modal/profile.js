const refs = {
  openMenuBtn: document.querySelector('[data-profile]'),
  backdrop: document.querySelector('.backdrop-2'),
};

refs.openMenuBtn.addEventListener('click', onOpenProfile);
refs.backdrop.addEventListener('click', onClickBackdrop);

function onOpenProfile(e) {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressEsc);
}

function onCloseProfile() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressEsc);
}

function onClickBackdrop(e) {
  if (e.target === e.currentTarget) {
    onCloseProfile();
  }
}

function onPressEsc(e) {
  if (e.code === 'Escape') {
    onCloseProfile();
  }
}
