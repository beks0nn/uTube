import React from "react";

import "./Player.scss";

const BASE_EMBED_URL = "https://www.youtube.com/embed/";

function Player({ id }) {
  const embedUrl = `${BASE_EMBED_URL}${id}?autoplay=1&version=3&loop=1&playlist=${id}`;
  return (
    <div className="player-container">
      <div className="wrapper">
        <iframe
          title="someplayer"
          src={embedUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Player;
