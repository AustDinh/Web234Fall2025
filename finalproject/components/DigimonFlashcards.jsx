import { useState } from "react";
import Flashcard from "./Flashcard";

const digimonData = [
  // Tai's Digimon
  {
    name: "Agumon",
    fact: "A Reptile Digimon known for evolving into Greymon.",
    type: "Vaccine",
    level: "Rookie",
    moves: ["Pepper Breath", "Spitfire Blast"],
    img: "https://digimon.shadowsmith.com/img/agumon.jpg",
    evolvesTo: ["Greymon", "MetalGreymon"]
  },
  {
    name: "Greymon",
    fact: "A dinosaur Digimon that evolves from Agumon.",
    type: "Vaccine",
    level: "Champion",
    moves: ["Mega Flame", "Horn Attack"],
    img: "https://digimon.shadowsmith.com/img/greymon.jpg",
    evolvesTo: ["MetalGreymon"]
  },
  {
    name: "MetalGreymon",
    fact: "Cybernetic dinosaur Digimon evolved from Greymon.",
    type: "Vaccine",
    level: "Ultimate",
    moves: ["Giga Destroyer", "Metal Blast"],
    img: "https://digimon.shadowsmith.com/img/metalgreymon.jpg",
    evolvesTo: []
  },

  // Matt's Digimon
  {
    name: "Gabumon",
    fact: "Wears a fur pelt and evolves into Garurumon.",
    type: "Data",
    level: "Rookie",
    moves: ["Blue Blaster", "Horn Attack"],
    img: "https://digimon.shadowsmith.com/img/gabumon.jpg",
    evolvesTo: ["Garurumon", "WereGarurumon"]
  },
  {
    name: "Garurumon",
    fact: "A wolf Digimon evolved from Gabumon.",
    type: "Data",
    level: "Champion",
    moves: ["Howling Blaster", "Frost Fang"],
    img: "https://digimon.shadowsmith.com/img/garurumon.jpg",
    evolvesTo: ["WereGarurumon"]
  },
  {
    name: "WereGarurumon",
    fact: "A werewolf Digimon evolved from Garurumon.",
    type: "Data",
    level: "Ultimate",
    moves: ["Blazing Ice Fang", "Wolf Bite"],
    img: "https://digimon.shadowsmith.com/img/weregarurumon.jpg",
    evolvesTo: []
  },

  // Sora's Digimon
  {
    name: "Biyomon",
    fact: "A pink bird Digimon that evolves into Birdramon.",
    type: "Vaccine",
    level: "Rookie",
    moves: ["Spiral Twister", "Fire Wing"],
    img: "https://digimon.shadowsmith.com/img/biyomon.jpg",
    evolvesTo: ["Birdramon", "Garudamon"]
  },
  {
    name: "Birdramon",
    fact: "A large phoenix Digimon evolved from Biyomon.",
    type: "Vaccine",
    level: "Champion",
    moves: ["Fire Wing", "Flame Talon"],
    img: "https://digimon.shadowsmith.com/img/birdramon.jpg",
    evolvesTo: ["Garudamon"]
  },
  {
    name: "Garudamon",
    fact: "A majestic bird Digimon evolved from Birdramon.",
    type: "Vaccine",
    level: "Ultimate",
    moves: ["Fire Tornado", "Sky Talon"],
    img: "https://digimon.shadowsmith.com/img/garudamon.jpg",
    evolvesTo: []
  },

  // Izzy's Digimon
  {
    name: "Tentomon",
    fact: "A beetle Digimon that evolves into Kabuterimon.",
    type: "Data",
    level: "Rookie",
    moves: ["Super Shocker", "Electro Shocker"],
    img: "https://digimon.shadowsmith.com/img/tentomon.jpg",
    evolvesTo: ["Kabuterimon", "MegaKabuterimon"]
  },
  {
    name: "Kabuterimon",
    fact: "A giant beetle Digimon evolved from Tentomon.",
    type: "Data",
    level: "Champion",
    moves: ["Super Electro Shocker", "Horn Attack"],
    img: "https://digimon.shadowsmith.com/img/kabuterimon.jpg",
    evolvesTo: ["MegaKabuterimon"]
  },
  {
    name: "MegaKabuterimon",
    fact: "A mechanical beetle Digimon evolved from Kabuterimon.",
    type: "Data",
    level: "Ultimate",
    moves: ["Ultra Drill Attack", "Mega Thunder"],
    img: "https://digimon.shadowsmith.com/img/megakabuterimon.jpg",
    evolvesTo: []
  },

  // Mimi's Digimon
  {
    name: "Palmon",
    fact: "A plant Digimon that evolves into Togemon.",
    type: "Vaccine",
    level: "Rookie",
    moves: ["Poison Ivy Whip", "Vine Whip"],
    img: "https://digimon.shadowsmith.com/img/palmon.jpg",
    evolvesTo: ["Togemon", "Lilimon"]
  },
  {
    name: "Togemon",
    fact: "A cactus-like Digimon evolved from Palmon.",
    type: "Vaccine",
    level: "Champion",
    moves: ["Vine Whip", "Rolling Thorn"],
    img: "https://digimon.shadowsmith.com/img/togemon.jpg",
    evolvesTo: ["Lilimon"]
  },
  {
    name: "Lilimon",
    fact: "A plant goddess Digimon evolved from Togemon.",
    type: "Vaccine",
    level: "Ultimate",
    moves: ["Solar Blast", "Petal Twister"],
    img: "https://digimon.shadowsmith.com/img/lilimon.jpg",
    evolvesTo: []
  },

  // Joe's Digimon
  {
    name: "Gomamon",
    fact: "A playful Digimon that controls sea creatures.",
    type: "Vaccine",
    level: "Rookie",
    moves: ["Marching Fishes", "Fish Power"],
    img: "https://digimon.shadowsmith.com/img/gomamon.jpg",
    evolvesTo: ["Ikkakumon", "Zudomon"]
  },
  {
    name: "Ikkakumon",
    fact: "A walrus Digimon evolved from Gomamon.",
    type: "Vaccine",
    level: "Champion",
    moves: ["Horn Attack", "Ice Fang"],
    img: "https://digimon.shadowsmith.com/img/ikkakumon.jpg",
    evolvesTo: ["Zudomon"]
  },
  {
    name: "Zudomon",
    fact: "A warrior Digimon evolved from Ikkakumon.",
    type: "Vaccine",
    level: "Ultimate",
    moves: ["Thunder Hammer", "Cyclone Throw"],
    img: "https://digimon.shadowsmith.com/img/zudomon.jpg",
    evolvesTo: []
  },

  // T.K.'s Digimon
  {
    name: "Patamon",
    fact: "Has big ears that let it fly; evolves into Angemon.",
    type: "Data",
    level: "Rookie",
    moves: ["Boom Bubble", "Air Shot"],
    img: "https://digimon.shadowsmith.com/img/patamon.jpg",
    evolvesTo: ["Angemon", "MagnaAngemon"]
  },
  {
    name: "Angemon",
    fact: "An angelic Digimon evolved from Patamon.",
    type: "Vaccine",
    level: "Champion",
    moves: ["Hand of Fate", "Holy Bomb"],
    img: "https://digimon.shadowsmith.com/img/angemon.jpg",
    evolvesTo: ["MagnaAngemon"]
  },
  {
    name: "MagnaAngemon",
    fact: "A holy Digimon evolved from Angemon.",
    type: "Vaccine",
    level: "Ultimate",
    moves: ["Gate of Destiny", "Heaven's Blast"],
    img: "https://digimon.shadowsmith.com/img/magnaangemon.jpg",
    evolvesTo: []
  },

  // Kari's Digimon
  {
    name: "Gatomon",
    fact: "A small feline Digimon that evolves into Angewomon.",
    type: "Vaccine",
    level: "Rookie",
    moves: ["Cat's Eye Hypnotism", "Lightning Paw"],
    img: "https://digimon.shadowsmith.com/img/gatomon.jpg",
    evolvesTo: ["Angewomon"]
  },
  {
    name: "Angewomon",
    fact: "A holy Digimon evolved from Gatomon.",
    type: "Vaccine",
    level: "Ultimate",
    moves: ["Heaven's Charm", "Holy Arrow"],
    img: "https://digimon.shadowsmith.com/img/angewomon.jpg",
    evolvesTo: []
  }
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
