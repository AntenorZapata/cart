// import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faPlay,
//   faAngleLeft,
//   faAngleRight,
//   faPause,
// } from '@fortawesome/free-solid-svg-icons';

// export default class Player extends Component {
//   constructor(props) {
//     super(props);
//     this.audio = React.createRef();
//     this.handlePlaySong = this.handlePlaySong.bind(this);
//     this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
//     this.handleDrag = this.handleDrag.bind(this);

//     this.state = {
//       songInfo: {
//         currentTime: 0,
//         duration: 0,
//         animationPercentage: 0,
//       },
//     };
//   }

//   handlePlaySong() {
//     const { isPlaying, handleSetIsPlaying } = this.props;
//     if (isPlaying) {
//       this.audio.current.pause();
//     } else {
//       this.audio.current.play();
//     }
//     handleSetIsPlaying();
//   }

//   handleGetTime(time) {
//     return (
//       `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`
//     );
//   }

//   handleTimeUpdate(e) {
//     const { currentTime } = e.target;
//     const { duration } = e.target;
//     const roundedCurrent = Math.round(currentTime);
//     const roundedDuration = Math.round(duration);
//     const animation = Math.round((roundedCurrent / roundedDuration) * 100);

//     this.setState((prev, _props) => ({
//       songInfo: {
//         ...prev.songInfo,
//         currentTime,
//         duration,
//         animationPercentage: animation,
//       },
//     }));
//   }

//   handleDrag(e) {
//     this.audio.current.currentTime = e.target.value;
//     this.setState((prev, _props) => ({
//       songInfo: {
//         ...prev.songInfo,
//         currentTime: e.target.value,
//       },
//     }));
//   }

//   render() {
//     const { currSong, isPlaying } = this.props;
//     const { songInfo } = this.state;

//     const trackAnim = {
//       transform: `translateX(${songInfo.animationPercentage}%)`,
//     };

//     return (
//       <div className="player">
//         <div className="time-control">
//           <p>{this.handleGetTime(songInfo.currentTime)}</p>
//           <div
//             style={{
//               background: `linear-gradient(to right,
// ${currSong.color[0]} 0%,${currSong.color[1]} 100%)`,
//             }}
//             className="track"
//           >
//             <input
//               min={0}
//               max={songInfo.duration}
//               value={songInfo.currentTime}
//               onChange={this.handleDrag}
//               type="range"
//             />
//             <div style={trackAnim} className="animate-track" />
//           </div>

//           <p>{this.handleGetTime(songInfo.duration)}</p>
//         </div>
//         <div className="play-control">
//           <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
//           <FontAwesomeIcon
//             onClick={this.handlePlaySong}
//             className="play"
//             size="2x"
//             icon={isPlaying ? faPause : faPlay}
//           />
//           <FontAwesomeIcon
//             className="skip-forward"
//             size="2x"
//             icon={faAngleRight}
//           />
//         </div>
//         <audio
//           onLoadedMetadata={this.handleTimeUpdate}
//           onTimeUpdate={this.handleTimeUpdate}
//           ref={this.audio}
//           src={currSong.audio}
//         />
//       </div>
//     );
//   }
// }
