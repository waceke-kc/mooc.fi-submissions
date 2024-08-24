import { useState } from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)

  const [points, setPoints]=useState(Array(anecdotes.length).fill(0))

  const [max, setMax]=useState(0)
 

  const handleNextClick= () =>{
    const randomNo=Math.floor( Math.random() * anecdotes.length-1 ) +1;
    setSelected(randomNo);
    const newMax=points.indexOf(points.reduce((a,b)=>Math.max(a,b), -Infinity))
    setMax(newMax)
  }

  const handleVoteClick= () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
    const newMax=points.indexOf(points.reduce((a,b)=>Math.max(a,b), -Infinity))
    setMax(newMax)
  }

  return (
    <>
      <h2> Anecdote of the day </h2>
      <br></br>
      <div>
        {anecdotes[selected]} has {points[selected]} votes
      </div>
      <button className="buttonClass" onClick={handleVoteClick}> Vote </button>
      <button className="buttonClass" onClick={handleNextClick}> Next Anectode </button>
      <br></br>
      <h2>Anectode with the most votes</h2>
       {anecdotes[max]} has {points[max]} votes
      </>
    
    
  )
}

export default App;
