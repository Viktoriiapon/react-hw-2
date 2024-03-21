import React, { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const initialFeedback = JSON.parse(localStorage.getItem('counterValues')) || {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [counter, setCounter] = useState(initialFeedback);

  const updateFeedback = feedbackType => {  
    setCounter({ ...counter, [feedbackType]: counter[feedbackType] + 1 });
  };

  const total = counter.bad + counter.good + counter.neutral;
  const positive = Math.round(((total - counter.bad) / total) * 100);

  const resetFeedback = () => {
    setCounter({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem('counterValues', JSON.stringify(counter));
  }, [counter]);

  return (
    <div>
      <Description />
      <Options 
        updateFeedback={updateFeedback} 
        totalFeedback={total} 
        resetFeedback={resetFeedback} 
      />
      {total>0 && <Feedback reactions = {counter} 
      total={total} positive={positive}/>}
      {total === 0 && <Notification />} 
    </div>
  );
}

export default App
