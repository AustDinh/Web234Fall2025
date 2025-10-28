import React, {useState} from 'react';

function FunFact(){
  const [showFact, setShowFact]=useState(false);

  const toggleFact=() => {
    setShowFact(!showFact);
  };

  return(
    <section className='fun-fact'>
      <h2>💡 Fun Fact</h2>
      <button onClick={toggleFact}>
        {showFact ? 'Hide Fun Fact' : 'Show Fun Fact'}
      </button>
      {showFact &&(
        <p>
          The first video game Easter egg was hidden *Adventure* on the Atari 2600!
        </p>
      )}
    </section>
  );
}

export default FunFact;