//variables
var openMenu = document.getElementById('menu-open');
var closeMenu = document.getElementById('menu-close');
var menu = document.getElementById('mobile-nav');

function showMenu() {
  menu.classList.remove('hide');
  menu.classList.add('show');
  openMenu.classList.remove('show');
  openMenu.classList.add('hide');
  closeMenu.classList.remove('hide');
  closeMenu.classList.add('show');
};

function hideMenu() {
  menu.classList.remove('show');
  menu.classList.add('hide');
  closeMenu.classList.remove('show');
  closeMenu.classList.add('hide');
  openMenu.classList.remove('hide');
  openMenu.classList.add('show');
}

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);
