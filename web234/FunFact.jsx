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
          Many JRPG's have many references to classic Nintento title's such as The Legend of Zelda and Super Mario Bros!
        </p>
      )}
    </section>
  );
}

export default FunFact;