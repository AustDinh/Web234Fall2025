import { useState } from "react";

export default function Flashcard({ digi }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">

        <div className="card-face card-front">
          <div className="holo-shine" />
          <img src={digi.img} alt={digi.name} className="digi-img" />
          <div className="digi-name">{digi.name}</div>
          <div className={`level-badge level-${digi.level.toLowerCase()}`}>
            {digi.level}
          </div>
        </div>

        <div className="card-face card-back">
          <div className="back-content">
            <h2>{digi.name}</h2>
            <p><strong>Type:</strong>
              <span className={`type ${digi.type.toLowerCase()}`}> {digi.type}</span>
            </p>
            <p className="fact">{digi.fact}</p>
            <h3>Moves</h3>
            <ul className="moves">
              {digi.moves.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
            <p className="hint">(Click to flip)</p>
          </div>
        </div>

      </div>
    </div>
  );
}
