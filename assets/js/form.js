const formDOM = document.querySelector('form');

formDOM.addEventListener('submit', (e) => {
  e.preventDefault();

  alert('Reservation saved!');
});
