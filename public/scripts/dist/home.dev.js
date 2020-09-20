"use strict";

$(document).ready(function () {
  console.log("Script is working!");
  var carousel1 = $('#carousel1');
  var carousel2 = $('#carousel2');
  var modal = $("#myModal");
  var modalImg = $("#img01");
  carousel1.click(function () {
    var clickedImage = $('#carousel1 .active').children()[0];
    modal.css({
      'display': 'flex',
      'flex-direction': 'row',
      'justify-content': 'center',
      'align-items': 'center'
    });
    modalImg.attr('src', clickedImage.src);
  });
  carousel2.click(function () {
    var clickedImage = $('#carousel2 .active').children()[0];
    modal.css({
      'display': 'flex',
      'flex-direction': 'row',
      'justify-content': 'center',
      'align-items': 'center'
    });
    modalImg.attr('src', clickedImage.src);
  }); // When the user clicks on <span> (x), close the modal

  modal.click(function () {
    modal.css('display', 'none');
  });
});