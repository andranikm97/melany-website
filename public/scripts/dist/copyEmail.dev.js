"use strict";

$(document).ready(function () {
  var emailIcon = $("#email-icon");
  var emailPopUp = $("#email-popUp");
  emailIcon.click(function () {
    emailPopUp.css({
      'opacity': '1'
    });
    setTimeout(function () {
      emailPopUp.css({
        'opacity': '0'
      });
    }, 4000);
    var copyText = document.querySelector(".email-text");
    copyText.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });
});