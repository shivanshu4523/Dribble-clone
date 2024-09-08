// Select the burger button and the navigation menu
const burger = document.querySelector('.nav-v2-burger');
const navMenu = document.querySelector('.nav-v2-main');

// Add event listener to toggle 'active' class
burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
