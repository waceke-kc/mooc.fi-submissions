import { useState } from 'react'

const StatisticLine= ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
  )
}
const Statistics = ({good, neutral, bad, all, average, positive }) => {
  if (all > 0){
    return(
      <>
       <table>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average/all} />
          <StatisticLine text="positive" value={(positive/all)*100 + "%"}/>
        </table> 
        
      </>
    )
  }
  return(
    <>
      <p>No feedback given</p>
      
    </>
  )
  
 
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage]=useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive]= useState(0)

 
  const handleGoodClick = () =>{
    setGood(good + 1 )
    setAll(all+1)
    setAverage(average+1)
    setPositive( positive+1 )
  }
    
  const handleNeutralClick = () =>{
    setNeutral(neutral + 1 )
    setAll(all+1)
    setAverage( average +0)
    setPositive( positive+0 )
  }
    
  
  const handleBadClick = () =>{
    setBad(bad + 1 )
    setAll(all+1)
    setAverage( average-1)
    setPositive( positive+0 )

  }
    
  return (
    <div>
      <h2> Give Feedback</h2>
      <br></br>
      <button className="buttonClass" onClick={handleGoodClick}> good </button>
      <button className="buttonClass" onClick={handleNeutralClick}>neutral</button>
      <button className="buttonClass" onClick={handleBadClick}>bad</button>
      <br></br>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
      
    </div>
  )
}

export default App