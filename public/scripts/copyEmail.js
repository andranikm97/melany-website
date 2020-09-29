$(document).ready(() => {

  const emailIcon = $("#email-icon");
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

    const copyText = document.querySelector(".email-text");
    copyText.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });
});