import React, { Component } from 'react';

export default class Song extends Component {
  render() {
    const { currSong, isPlaying } = this.props;

    return (
      <div className="song-container">
        <img
          className={isPlaying ? 'rotate' : null}
          src={currSong.cover}
          alt="cover"
        />
        <h2>{currSong.name}</h2>
        <h3>{currSong.artist}</h3>
      </div>
    );
  }
}
