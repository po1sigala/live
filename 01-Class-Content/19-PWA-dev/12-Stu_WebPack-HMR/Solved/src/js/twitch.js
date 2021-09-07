// function to embed twitch stream
export const twitchStream = (channel) => {
  const twitch = `<iframe frameborder="0" scrolling="no" src="https://player.twitch.tv/${channel}/embed" height="378" width="620"></iframe>`;
  return twitch;
};

// function to append a twitch stream to the page
export const appendTwitch = (channel) => {
  const twitch = twitchStream(channel);

  // get the body element
  const body = document.querySelector('body');

  // create a container for the twitch stream
  const twitchContainer = document.createElement('div');
  twitchContainer.innerHTML = twitch;

  // append the twitch stream to the root element
  body.appendChild(twitchContainer);
};
