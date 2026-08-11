document.querySelectorAll('.copy-email').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    var email = link.getAttribute('data-email');
    var copy = navigator.clipboard && window.isSecureContext
      ? navigator.clipboard.writeText(email)
      : new Promise(function (resolve, reject) {
          var input = document.createElement('textarea');
          input.value = email;
          input.style.position = 'fixed';
          input.style.opacity = '0';
          document.body.appendChild(input);
          input.select();
          try {
            document.execCommand('copy') ? resolve() : reject();
          } catch (error) {
            reject(error);
          }
          document.body.removeChild(input);
        });

    copy.then(function () {
      var label = link.querySelector('.copy-email__label');
      if (!label) return;
      label.textContent = 'Copied!';
      window.setTimeout(function () { label.textContent = 'Email'; }, 1500);
    });
  });
});
