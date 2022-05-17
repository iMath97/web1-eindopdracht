// navigatie
const hamburgerBTN = document.querySelector('.hamburger');
const navigatieDIV = document.querySelector('nav');

hamburgerBTN.addEventListener('click', () => {
  navigatieDIV.classList.toggle('nav_open');
});
