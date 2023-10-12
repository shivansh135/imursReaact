import React from 'react';
import './video.css'; // Import the CSS file

export const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="videohome.mp4" type="video/mp4" />
      </video>
      <div className="content" style={{display:'none'}}>
        <h1>Customized Beyond Imagination</h1>
        <div className="ordernowhome">Order Now</div>
      </div>
    </div>
  );
};
