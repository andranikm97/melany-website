"use strict";

var emailIcon = $("#email-icon");
var copyText = document.getElementById("email-link");
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
  copyText.select();
  document.execCommand("copy");
});