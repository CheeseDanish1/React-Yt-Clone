/** @format */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Video extends Component {
  render() {
    return (
      <article className="video-container">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLahKLy8pQdCM0SiXNn3EfGIXX19QGzUG3"
          className="thumbnail"
          data-duration={this.props.length}
        >
          <img
            className="thumbnail-image"
            src={
              this.props.thumbnailImage
                ? this.props.thumbnailImage
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
                this.props.channelIcon
                  ? this.props.channelIcon
                  : 'https://source.unsplash.com/36x36/?men'
              }
              alt=""
            />
          </a>
          <div className="video-details">
            <a href="/" className="video-title">
              {this.props.videoTitle}
            </a>
            <a href="/" className="video-channel-name">
              {this.props.channelName}
            </a>
            <div className="video-metadata">
              <span>{`${this.props.views}`} views </span>•
              <span>{` ${this.props.uploadDate} ago`}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

Video.propTypes = {
  length: PropTypes.string,
  thumbnailImage: PropTypes.string,
  channelIcon: PropTypes.string,
  videoTitle: PropTypes.string,
  channelName: PropTypes.string,
  views: PropTypes.string,
  uploadDate: PropTypes.string
};

export default Video;
