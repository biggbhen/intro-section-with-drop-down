const ham = document.querySelector('.ham');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

ham.addEventListener('click', (e) => {
  if (hamburgerMenu.classList.contains('active')) {
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    hamburgerMenu.classList.remove('active');
  } else {
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    hamburgerMenu.classList.add('active');
  }
});
