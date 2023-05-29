import { useEffect } from "react";
import Clap from "../sounds/clap.wav";
import Hihat from "../sounds/hihat.wav";
import Kick from "../sounds/kick.wav";
import Openchat from "../sounds/openhat.wav";
import Boom from "../sounds/boom.wav";
import Ride from "../sounds/ride.wav";
import Snare from "../sounds/snare.wav";
import Tom from "../sounds/tom.wav";
import Tink from "../sounds/tink.wav";

import "../App.css";

export default function Touch() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;

      key.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
    };

    const handleTransitionEnd = (e) => {
      if (e.propertyName !== "transform") return;
      e.target.classList.remove("playing");
    };

    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach((key) => {
      key.addEventListener("transitionend", handleTransitionEnd);
    });
    window.addEventListener("keydown", handleKeyDown);

    // Nettoyage des écouteurs d'événements lors du démontage du composant
    return () => {
      keys.forEach((key) => {
        key.removeEventListener("transitionend", handleTransitionEnd);
      });
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="keys">
        <div data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
          <audio data-key="65" src={Clap}></audio>
        </div>
        <div data-key="90" className="key">
          <kbd>Z</kbd>
          <span className="sound">hihat</span>
          <audio data-key="90" src={Hihat}></audio>
        </div>
        <div data-key="69" className="key">
          <kbd>E</kbd>
          <span className="sound">kick</span>
          <audio data-key="69" src={Kick}></audio>
        </div>
        <div data-key="82" className="key">
          <kbd>R</kbd>
          <span className="sound">openhat</span>
          <audio data-key="82" src={Openchat}></audio>
        </div>
        <div data-key="84" className="key">
          <kbd>T</kbd>
          <span className="sound">boom</span>
          <audio data-key="84" src={Boom}></audio>
        </div>
        <div data-key="89" className="key">
          <kbd>Y</kbd>
          <span className="sound">ride</span>
          <audio data-key="89" src={Ride}></audio>
        </div>
        <div data-key="85" className="key">
          <kbd>U</kbd>
          <span className="sound">snare</span>
          <audio data-key="85" src={Snare}></audio>
        </div>
        <div data-key="73" className="key">
          <kbd>I</kbd>
          <span className="sound">tom</span>
          <audio data-key="73" src={Tom}></audio>
        </div>
        <div data-key="79" className="key">
          <kbd>O</kbd>
          <span className="sound">tink</span>
          <audio data-key="79" src={Tink}></audio>
        </div>
      </div>
    </div>
  );
}
