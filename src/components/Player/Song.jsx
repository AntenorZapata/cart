import React, { Component } from 'react';

export default class Song extends Component {
  render() {
    const { currSong } = this.props;
    return (
      <div className="song-container">
        <img src={currSong.cover} alt="cover" />
        <h2>{currSong.name}</h2>
        <h3>{currSong.artist}</h3>
      </div>
    );
  }
}
