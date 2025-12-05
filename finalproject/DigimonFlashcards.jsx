import { useState } from "react";
import Flashcard from "./Flashcard";

const digimonData = [
  {
    name: "Agumon",
    fact: "A Reptile Digimon known for evolving into Greymon.",
    type: "Vaccine",
    level: "Rookie",
    moves: ["Pepper Breath", "Spitfire Blast"],
    img: "https://digimon.shadowsmith.com/img/agumon.jpg"
  },
  {
    name: "Gabumon",
    fact: "Wears a fur pelt and evolves into Garurumon.",
    type: "Data",
    level: "Rookie",
    moves: ["Blue Blaster", "Horn Attack"],
    img: "https://digimon.shadowsmith.com/img/gabumon.jpg"
  },
  {
    name: "Patamon",
    fact: "Has big ears that let it fly; evolves into Angemon.",
    type: "Data",
    level: "Rookie",
    moves: ["Boom Bubble", "Air Shot"],
    img: "https://digimon.shadowsmith.com/img/patamon.jpg"
  },
  {
    name: "Gomamon",
    fact: "A playful Digimon that controls sea creatures.",
    type: "Vaccine",
    level: "Rookie",
    moves: ["Marching Fishes", "Fish Power"],
    img: "https://digimon.shadowsmith.com/img/gomamon.jpg"
  },
];

export default function DigimonFlashcards() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % digimonData.length);
  const prev = () => setIndex((i) => (i - 1 + digimonData.length) % digimonData.length);

  return (
    <div className="digivice-frame">
      <header className="digivice-header">
        <div className="logo">DigiDeck</div>
        <div className="controls">
          <button onClick={prev} className="nav">◀</button>
          <button onClick={next} className="nav">▶</button>
        </div>
      </header>

      <main className="digivice-main">
        <Flashcard digi={digimonData[index]} />
      </main>

      <footer className="digivice-footer">
        <p>Card {index + 1} of {digimonData.length}</p>
      </footer>
    </div>
  );
}
