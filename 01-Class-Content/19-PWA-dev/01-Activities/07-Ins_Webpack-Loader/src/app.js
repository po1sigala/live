// Import the filesystem module
const fs = require('fs');

const data = 'This is a file containing a collection of music lyrics.';
const textEl = document.querySelector('#text');

// fs.writeFile(
//   'lyrics.txt',
//   data,
//   {
//     encoding: 'utf8',
//     flag: 'w',
//     mode: 0o666,
//   },
//   (err) => {
//     if (err) console.log(err);
//     else {
//       console.log('File written successfully\n');
//       console.log('The written has the following contents:');
//       console.log(textEl);
//       console.log(fs.readFileSync('lyrics.txt', 'utf8'));
//       // const lyricText = fs.readFileSync('movies.txt', 'utf8')
//       // textEl.innerHTML = `<div> ${lyricText} <div>`;
//     }
//   }
// );
