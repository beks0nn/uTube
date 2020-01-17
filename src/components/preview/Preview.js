import React from "react";
import "./Preview.scss";

function Preview({ id }) {
  return (
    <div className="preview">
      <div className="image-container">
        <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} />
      </div>
      <div className="video-info">
        <div className="semi-bold show-max-two-lines">KANNAGI</div>
        <div className="video-preview-metadata-container">
          <div className="channel-title">MORI MORI MORI</div>
          <div>
            <span>2.1M views • 2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
