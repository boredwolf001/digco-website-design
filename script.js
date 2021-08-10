const menuIcon = document.querySelector('.menuIcon');
const sideNav = document.querySelector('.navLinks');

menuIcon.addEventListener('click', (e) => {
  e.preventDefault();
  sideNav.classList.toggle('active')
})
