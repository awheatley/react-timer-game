import { useState, useRef } from "react";

export default function Player() {
  const playerNameInput = useRef();

  const [enteredPlayer, setEnteredPlayer] = useState('');
  
  function handleClick() {
    setEnteredPlayer(playerNameInput.current.value);
    playerNameInput.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerNameInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
