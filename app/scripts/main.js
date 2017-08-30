document.addEventListener('DOMContentLoaded', function (event) {
  const elem = document.querySelector('.grid');
  const msnry = new Masonry( elem, {
    itemSelector: '.grid-item',
    transitionDuration : 0
  });
});
