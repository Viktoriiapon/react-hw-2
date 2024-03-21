import React from 'react'

const Feedback = ({reactions, total, positive}) => {
  return (
    <>
    <ul>
        <li>Good: {reactions.good}</li>
        <li>Neutral:{reactions.neutral} </li>
        <li>Bad:{reactions.bad} </li>
        <li>Total:{total} </li>
        <li>Positive:{positive} </li>
    </ul>
    </>
  )
}

export default Feedback