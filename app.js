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
// dropdown function
const body = document.querySelector('body');
const arrow = document.querySelector('.arrow-box'),
  options = document.querySelector('.options'),
  dropdown = document.querySelector('.drop-down');
arrow.addEventListener('click', (x) => {
  if (options.classList.contains('open-options')) {
    options.classList.remove('open-options');
    document.querySelector('.arrow').style.transform = 'rotate(495deg)';
  } else {
    options.classList.add('open-options');
    document.querySelector('.arrow').style.transform = 'rotate(315deg)';
  }
});

options.addEventListener('click', (e) => {
  const val = e.target.textContent;

  if (e.target.parentElement.className === 'options open-options') {
    document.querySelector('.input').textContent = val;
  }
});
