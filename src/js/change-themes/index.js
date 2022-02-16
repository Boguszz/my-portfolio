const refs = {
  changeThemeBtn: document.querySelector('[data-theme]'),
  changeThemeMobileBtn: document.querySelector('[data-mTheme]'),
  html: document.querySelector('html'),
};

refs.changeThemeBtn.addEventListener('click', onChangeTheme);
refs.changeThemeMobileBtn.addEventListener('click', onChangeTheme);

function onChangeTheme() {
  refs.html.classList.toggle('dark-mode');
}
