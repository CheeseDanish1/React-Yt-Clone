/** @format */

import React from 'react';
import Video from './Video.jsx';

function Videos() {
  return (
    <div className="videos">
      <section className="video-section">
        <Video
          channelName="Code with me!"
          videoTitle="Coding time!"
          views="1.9K"
          uploadDate="1 months"
          length="10:46"
        />

        <Video
          channelName="Mountains"
          videoTitle="The Mountains"
          views="12K"
          uploadDate="3 months"
          length="4:14"
          channelIcon="https://randomuser.me/api/portraits/men/82.jpg"
          thumbnailImage="https://source.unsplash.com/250x150/?mountains"
        />

        <Video
          length="5:24"
          thumbnailImage="https://source.unsplash.com/250x150/?beach"
          channelIcon="https://source.unsplash.com/36x36/?beach"
          videoTitle="Beautiful Beaches in Our World"
          channelName="Beaches Explorer"
          views="6.5K"
          uploadDate="2 days"
        />

        <Video
          length="10:23:24"
          thumbnailImage="https://source.unsplash.com/250x150/?programming"
          channelIcon="https://source.unsplash.com/36x36/?man"
          videoTitle="How to exit vim"
          channelName="Simplified Web Tips"
          views="1.4B"
          uploadDate="1 year"
        />

        <Video
          length="11:39"
          thumbnailImage="https://source.unsplash.com/250x150/?diy"
          channelIcon="https://source.unsplash.com/36x36/?women"
          videoTitle="How to make a spoon out of paper"
          channelName="5 Minute Crafts"
          views="1.6K"
          uploadDate="5 minutes"
        />

        <Video
          length="8:26"
          thumbnailImage="https://source.unsplash.com/250x150/?stonk"
          channelIcon="data:image/jpeg;base64,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"
          videoTitle="LWIAY 20392: Stonks irl"
          channelName="Pewdiepie"
          views="4"
          uploadDate="2 years"
        />

        <Video
          length="5:22"
          thumbnailImage="https://source.unsplash.com/250x150/?cardi"
          views="9.4B"
          uploadDate="7 seconds"
          videoTitle="Kiss my WAP (UwU)"
          channelName="The Real CardiB"
        />

        <Video
          length="53:21"
          thumbnailImage="http://source.unsplash.com/250x150/?conspiracy"
          views="2.8M"
          uploadDate="9 years"
          videoTitle="The earth is flat"
          channelName="Awoken Boomer"
        />
      </section>
    </div>
  );
}

export default Videos;
