fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', //GET is the default, so there is no need to include it
  // but for the other methods, you would place them in this option.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
