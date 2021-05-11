import React, { Component } from 'react';
import Player from '../components/Player/Player';
import Song from '../components/Player/Song';
import Header from '../components/Header';
import image from '../components/Player/images/noks.jpg';
import audio from '../components/Player/music/pescoco.mp3';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init('user_XUCQW0dqHQK2Uh4J45aox');

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

  handleSendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uhlkyfm',
        'template_ehpw22u',
        e.target,
        'user_XUCQW0dqHQK2Uh4J45aox'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  render() {
    const { currSong, isPlaying } = this.state;
    console.log(isPlaying);
    return (
      <div>
        <Header />
        <div className="about-container">
          <div className="audio-player-container">
            <Song isPlaying={isPlaying} currSong={currSong} />
            <Player
              handleSetIsPlaying={this.handleSetIsPlaying}
              isPlaying={isPlaying}
              currSong={currSong}
            />
          </div>
          <div className="form">
            <form onSubmit={this.handleSendEmail}>
              <div className="input-email-rating">
                <input type="text" placeholder="Nome" required name="name" />
              </div>
              <div className="input-email-rating">
                <input type="email" placeholder="Email" required name="email" />
              </div>
              <div className="text-area-rating">
                <textarea
                  className="textarea-about"
                  id=""
                  cols="20"
                  rows="10"
                  name="message"
                ></textarea>
              </div>
              <div className="about-btn">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
