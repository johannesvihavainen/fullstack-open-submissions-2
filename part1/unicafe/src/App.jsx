import { useState } from 'react'

// const Buttons = (props) => {
//   return <div className='buttons'>
//     <button onClick={props.handleGood}>good</button>
//     <button onClick={props.handleNeutral}>neutral</button>
//     <button onClick={props.handleBad}>bad</button>
//   </div>
// }

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
      <h1>give feedback</h1>
      {/* <Buttons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} /> */}
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App