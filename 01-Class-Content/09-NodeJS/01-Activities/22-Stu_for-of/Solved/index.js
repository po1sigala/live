const green = (text) => console.log(`\x1b[36m${text}\x1b[0m`);

const songs = [
  'MONTERO (Call Me By Your Name)',
  'Peaches (feat. Daniel Caesar & Giveon)',
  'Kiss Me More (feat. SZA)',
  'Astronaut In The Ocean',
  'Save Your Tears (with Ariana Grande) (Remix)',
  'RAPSTAR',
  'Levitating (feat. DaBaby)',
  'Leave The Door Open',
  'Botella Tras Botella',
  'Fiel',
];

for (const [index, song] of songs.entries()) {
  green(`${index + 1}: ${song}`);
}
