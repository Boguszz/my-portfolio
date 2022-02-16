const refs = {
  openMenuBtn: document.querySelector('[data-menu]'),
  backdrop: document.querySelector('.backdrop'),
  links: document.querySelectorAll('.m-navigations a'),
};

refs.openMenuBtn.addEventListener('click', onOpenMenu);
refs.backdrop.addEventListener('click', onClickBackdrop);
refs.links.forEach(link => link.addEventListener('click', onCloseMenu));

function onOpenMenu(e) {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressEsc);
}

function onCloseMenu() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressEsc);
}

function onClickBackdrop(e) {
  if (e.target === e.currentTarget) {
    onCloseMenu();
  }
}

function onPressEsc(e) {
  if (e.code === 'Escape') {
    onCloseMenu();
  }
}
