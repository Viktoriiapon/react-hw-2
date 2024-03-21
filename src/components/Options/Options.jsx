
import React from 'react';
import './Options.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const handleReset = () => {
    resetFeedback();
   
  };

  return (
    <div className='options'>
      <button onClick={() => { updateFeedback("good"); }}>Good 👍</button>
      <button onClick={() => { updateFeedback("neutral"); }}>Neutral</button>
      <button onClick={() => { updateFeedback("bad"); }}>Bad 👎</button>
      {totalFeedback > 0 && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}

export default Options