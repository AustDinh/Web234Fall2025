import React from "react";
import GameCard from './GameCard';

function GameList(){
const games =[
  {id: 1, title: 'Kingdom Hearts', genre:'Action Role-Playing Game', year: 2002, rating: '9/10'},
  {id: 2, title: 'Final Fantasy VII', genre:'Action Role-Playing Game', year: 1997, rating: '10/10'},
  {id: 3, title: 'Persona 5', genre:'Action Role-Playing Game', year: 2016, rating: '10/10'},
  {id: 4, title: 'Xenoblade Chronicles 3', genre:'Action Role-Playing Game', year: 2022, rating: '10/10'},
  {id: 5, title: 'The Legend of Heroes: Trails in the Sky', genre:'Action Role-Playing Game', year: 2015, rating: '8/10'},
];

return(
  <section className='list'>
    <h2>Game Library</h2>
    <div className='card-container'>
      {games.map((game) =>(<GameCard key={game.id} {...game} />))}
    </div>
  </section>
)
}

export default GameList