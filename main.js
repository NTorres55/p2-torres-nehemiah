//   Hamburger Menu
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

// ********* Read more/less ************//
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
//****** Form for join *********//
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
