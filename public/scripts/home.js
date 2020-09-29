$(document).ready(() => {
  const carousel1 = $('#carousel1');
  const carousel2 = $('#carousel2');

  const modal = $("#myModal");
  const modalImg = $("#img01");
  carousel1.click(function () {
    const clickedImage = $('#carousel1 .active').children()[0];
    modal.css({
      'display': 'flex',
      'flex-direction': 'row',
      'justify-content': 'center',
      'align-items': 'center',
    });
    modalImg.attr('src', clickedImage.src);
  });

  carousel2.click(function () {
    const clickedImage = $('#carousel2 .active').children()[0];
    modal.css({
      'display': 'flex',
      'flex-direction': 'row',
      'justify-content': 'center',
      'align-items': 'center',
    });
    modalImg.attr('src', clickedImage.src);
  });

  modal.click(function () {
    modal.css('display', 'none');
  });

});