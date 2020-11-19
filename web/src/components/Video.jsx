/** @format */

import React from 'react';

function Video({
  channelName,
  videoTitle,
  views,
  uploadDate,
  length,
  thumbnailImage,
  channelIcon,
}) {
  return (
    <article className="video-container">
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLahKLy8pQdCM0SiXNn3EfGIXX19QGzUG3"
        className="thumbnail"
        data-duration={length}
      >
        <img
          className="thumbnail-image"
          src={
            thumbnailImage
              ? thumbnailImage
              : 'https://source.unsplash.com/250x150/?programming"'
          }
          alt=""
        />
      </a>
      <div className="video-bottom-section">
        <a href="/">
          <img
            className="channel-icon"
            src={
              channelIcon
                ? channelIcon
                : 'https://source.unsplash.com/36x36/?men'
            }
            alt=""
          />
        </a>
        <div className="video-details">
          <a href="/" className="video-title">
            {videoTitle}
          </a>
          <a href="/" className="video-channel-name">
            {channelName}
          </a>
          <div className="video-metadata">
            <span>{`${views}`} views </span>•<span>{` ${uploadDate} ago`}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Video;
