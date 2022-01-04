const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installBtn.style.visibility = 'visible';
  textHeader.textContent = 'Click to Install!';

  installBtn.addEventListener('click', () => {
    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
  });
});

window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Success, Installed!';
  console.log('👍', 'appinstalled', event);
});
