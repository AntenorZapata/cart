import React, { Component } from 'react';
import Player from '../components/Player/Player';
import Song from '../components/Player/Song';
import Header from '../components/Header';
import image from '../components/Player/images/noks.jpg';
import audio from '../components/Player/music/pescoco.mp3';

const audioVoice = [
  {
    name: 'Hey! :)',
    cover: image,
    artist: 'Antenor Zapata',
    audio,
    color: ['#FFE5E5', '#FF4C4C'],
    id: 'uuidv4',
    active: true,
  },
];

export default class About extends Component {
  constructor(props) {
    super(props);
    this.handleSetIsPlaying = this.handleSetIsPlaying.bind(this);

    this.state = {
      songs: audioVoice,
      currSong: audioVoice[0],
      isPlaying: false,
    };
  }

  handleSetIsPlaying() {
    const { isPlaying } = this.state;
    this.setState({ isPlaying: !isPlaying });
  }

  render() {
    const { currSong, isPlaying } = this.state;
    console.log(isPlaying);
    return (
      <div>
        <Header />
        <div className="about-container">
          <div className="audio-player-container">
            <Song currSong={currSong} />
            <Player
              handleSetIsPlaying={this.handleSetIsPlaying}
              isPlaying={isPlaying}
              currSong={currSong}
            />
          </div>
        </div>
      </div>
    );
  }
}
