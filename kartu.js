const kartu1 = document.querySelector('.kartu-1');
const kartu2 = document.querySelector('.kartu-2');

kartu1.addEventListener('click', function() {
  kartu1.classList.toggle('flipped');
});
kartu2.addEventListener('click', function() {
  kartu2.classList.toggle('flipped');
});