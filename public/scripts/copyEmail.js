const emailIcon = $("#email-icon");
const copyText = document.getElementById("email-link");
const emailPopUp = $("#email-popUp");

emailIcon.click(() => {
  emailPopUp.css({
    'opacity': '1'
  });
  setTimeout(() => {
    emailPopUp.css({
      'opacity': '0',
    });
  }, 4000);
  copyText.select();
  document.execCommand("copy");
});