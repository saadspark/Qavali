import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./AudioPlayer.css"; // Ensure this CSS file exists

const AudioPlayer = ({ tracks }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isNowPlayingVisible, setIsNowPlayingVisible] = useState(true); // Default to true

  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const animationRef = useRef(null);

  const handlePlayPause = (index) => {
    if (currentTrack === index) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(index);
      setIsPlaying(true);
      audioRef.current.src = tracks[index].url;
      audioRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);

      if (progressRef.current) {
        progressRef.current.style.width = `${
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        }%`;
      }

      animationRef.current = requestAnimationFrame(handleTimeUpdate);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const toggleNowPlaying = () => {
    setIsNowPlayingVisible(!isNowPlayingVisible);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      animationRef.current = requestAnimationFrame(handleTimeUpdate);

      return () => {
        cancelAnimationFrame(animationRef.current);
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [currentTrack, volume]);

  return (
    <div className="audio-player">
      <div className="track-list-container">
        <div className="track-list">
          {tracks.map((track, index) => (
            <div
              className="track-item"
              key={index}
              onClick={() => handlePlayPause(index)}
            >
              <div className="track-image">
                <img src={track.image} alt={track.title} />
              </div>
              <div className="track-info">
                <h4>{track.title}</h4>
              </div>
              <button className="play-btn">
                {currentTrack === index && isPlaying ? (
                  <i className="fa fa-pause"></i>
                ) : (
                  <i className="fa fa-play"></i>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Always render Now Playing */}
      {currentTrack !== null && (
  <button
    className={`toggle-now-playing-btn ${isNowPlayingVisible ? 'now-playing-left' : 'now-playing-right'}`}
    onClick={toggleNowPlaying}
  >
    {isNowPlayingVisible ? "⇚" : "⇛"}
  </button>
)}

      {/* Now Playing Section */}
      {currentTrack !== null && (
        <div
          className={`now-playing ${
            isNowPlayingVisible ? "visible" : "hidden"
          }`}
        >
          <div className="now-playing-image">
            <img src={tracks[currentTrack].image} alt="Current Track" />
            {!isNowPlayingVisible && (
              <div className="wave-animation">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
          {isNowPlayingVisible && (
            <div className="now-playing-info">
              <h3>{tracks[currentTrack].title}</h3>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress" ref={progressRef}></div>
                </div>
                <div className="time-info">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          )}
          {isNowPlayingVisible && (
            <div className="now-playing-controls">
              <button
                onClick={() => audioRef.current.pause()}
                className="control-btn"
              >
                <i className="fa fa-stop"></i>
              </button>
              <button
                onClick={() => audioRef.current.play()}
                className="control-btn"
              >
                <i className="fa fa-play"></i>
              </button>
              <button
                onClick={() => (audioRef.current.currentTime -= 10)}
                className="control-btn"
              >
                <i className="fa fa-backward"></i>
              </button>
              <button
                onClick={() => (audioRef.current.currentTime += 10)}
                className="control-btn"
              >
                <i className="fa fa-forward"></i>
              </button>
              <input
                type="range"
                className="volume-slider"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onInput={handleVolumeChange}
              />
            </div>
          )}
        </div>
      )}

      <audio ref={audioRef} />
    </div>
  );
};

AudioPlayer.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AudioPlayer;
