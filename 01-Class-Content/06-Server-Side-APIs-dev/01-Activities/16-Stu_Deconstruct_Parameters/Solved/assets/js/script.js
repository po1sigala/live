fetch(
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Explain each parameter in comments below
// per_page results per page
// state is the of the issue, it can be open, closed, or all
// sort sorts the results based on the parameter given, the date created, updated, or comments
// direction deterines the order of the sort
