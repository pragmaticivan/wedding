document.addEventListener('DOMContentLoaded', function (event) {
  const elem = document.querySelector('.grid');

  imagesLoaded(elem, function() {
    new Masonry(elem, {
      itemSelector: '.grid-item',
      transitionDuration : 0
    });
  });
});

$(document).ready(function() {
  $('.grid').lightGallery({
      thumbnail: true,
      download: false,
      getCaptionFromTitleOrAlt: false,
      selector: '.grid-item a'
  });
});
