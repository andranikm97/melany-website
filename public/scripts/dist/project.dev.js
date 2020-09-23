"use strict";

$(document).ready(function () {
  var modal = $("#myModal");
  var modalImg = $("#img01");
  var images = $('.display-image');
  images.each(function (index, element) {
    element.addEventListener('click', function () {
      modal.css({
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'center',
        'align-items': 'center'
      });
      modalImg.attr('src', element.src);
    });
  }); // When the user clicks on <span> (x), close the modal

  modal.click(function () {
    modal.css('display', 'none');
  });
});