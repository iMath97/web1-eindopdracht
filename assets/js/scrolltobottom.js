const scrollBTN = document.querySelector('.scrollBTN');

scrollBTN.addEventListener('click', () => {
  document.querySelector('#cards_stop_scroller').scrollIntoView({
    behavior: 'smooth',
  });
});
