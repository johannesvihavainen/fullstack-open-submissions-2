import { useState } from 'react'

// const Buttons = (props) => {
//   return <div className='buttons'>
//     <button onClick={props.handleGood}>good</button>
//     <button onClick={props.handleNeutral}>neutral</button>
//     <button onClick={props.handleBad}>bad</button>
//   </div>
// }

const Feedback = ({ handleGood, handleNeutral, handleBad }) => {
  return <div>
    <h1>give feedback</h1>
    <Button onClick={handleGood} text='good' />
    <Button onClick={handleNeutral} text='neutral' />
    <Button onClick={handleBad} text='bad' />
  </div>
}

const Statistics = ({good, neutral, bad}) => {
  return <div>
    <h2>statistics</h2>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
  </div>
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>

      {/* <Buttons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} /> */}
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App