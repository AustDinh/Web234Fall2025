import React from "react";

function GameCard({title, genre, year, rating}){
  const handleClick =() =>{
    alert(`You clicked on ${title}!`);
  };
  const handleMouseEnter =(e) => {
    e.currentTarget.style.backgroundColor= '#f0f0f0';
  };
  const handleMouseLeave =(e) => {
    e.currentTarget.style.backgroundColor='white';
  };


return(
  <div className='card'
  onClick={handleClick}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}>
  
    <h3>{title}</h3>
    <p><strong>Genre: </strong>{genre}</p>
    <p><strong>Year: </strong>{year}</p>
    <p><strong>Rating: </strong>{rating}</p>
  </div>
);
}
export default GameCard;