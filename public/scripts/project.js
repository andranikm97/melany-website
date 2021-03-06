$(document).ready(() => {
  const modal = $("#myModal");
  const modalImg = $("#img01");
  const images = $('.display-image');
  images.each((index, element) => {

    element.addEventListener('click', function () {
      modal.css({
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'center',
        'align-items': 'center',
      });
      modalImg.attr('src', element.src);
    });
  });

  // When the user clicks on <span> (x), close the modal
  modal.click(function () {
    modal.css('display', 'none');
  });

});