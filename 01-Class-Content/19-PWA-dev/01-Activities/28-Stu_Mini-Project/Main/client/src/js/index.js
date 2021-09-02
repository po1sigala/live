import { Workbox } from 'workbox-window';
import '../css/styles.css';
import {postDb, getDb } from'./database';

const form  = document.getElementById('contact-form');

window.deleteCard = (e) => {
  console.log(e)
};

form.addEventListener('submit', (event) => {
    // handle the form data
    event.preventDefault();
    const name = form.elements['name'].value;
    const home = form.elements['home-phone'].value;
    const cell = form.elements['cell-phone'].value;
    const email = form.elements['email'].value

    

    postDb(name, home, cell, email);
    form.submit();
    fetchCards()
    
});


const fetchCards = async () => {
  const result = await getDb()

  let card = ` `;

  for (let data of result) {
    console.log(data);
    card += `
    <div class="card card-rounded col-md-3 m-2">
          <div class="card-header card-rounded">
            <h1>${data.name}</h1>
          </div>
          <div class="card-body">
            <p>Home Phone: ${data.home_phone}</p>
            <p>Cell Phone: ${data.cell_phone}</p>
            <p>Email: ${data.email}</p>
          </div>
          <div class="flex-row justify-flex-end p-1">
            <button class="btn btn-sm btn-danger" id="${data.id}" onclick="deleteCard(this)">Delete</button>
          </div>
        </div>
    `;
  }

  // Setting innerHTML as card variable
  document.getElementById('card-group').innerHTML = card;

}

const btn  = document.getElementById('2');

console.log(deleteCard);

fetchCards();
// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}

