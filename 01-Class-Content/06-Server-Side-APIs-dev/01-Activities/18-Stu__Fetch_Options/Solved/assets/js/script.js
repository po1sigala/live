fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  // The browser fetches the resource from the remote server without first looking in the cache,
  // but then will update the cache with the downloaded resource
  cache: 'reload',

  // Content-Type header tells the client what
  // the content type of the returned content actually is
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
