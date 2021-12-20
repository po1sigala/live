const installBtn = document.getElementById("installBtn");
const textHeader = document.getElementById("textHeader");

console.log(installBtn);

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
 
  installBtn.addEventListener('click', () => {
    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = "Installed!"
  });
});

window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = "Success, Installed!"
  console.log('👍', 'appinstalled', event);
});




