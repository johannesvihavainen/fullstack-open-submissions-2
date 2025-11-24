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

const Statistics = ({ good, neutral, bad, total }) => {
  const all = good + neutral + bad
  const average = all > 0 ? (good - bad) / all : 0
  const positive = all > 0 ? (good / all) * 100 : 0
  return <div>
    <h2>statistics</h2>
    {total > 0 ? <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all > 0 ? all : 0} />
      <StatisticLine text='average' value={average > 0 ? average : 0} />
      <StatisticLine text='positive' value={positive > 0 ? positive : 0} />
    </div> : 'No feedback given'}
  </div>
}

const StatisticLine = ({ value, text }) => {
  if (text === 'good' || text === 'neutral' || text === 'bad' || text === 'all' || text === 'average') {
    return <div>
      <p>{text}: {value}</p>
    </div>
  }
  else if (text === 'positive') {
    return <div><p>{text}: {value} % </p></div>
  }
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>

      {/* <Buttons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} /> */}
      <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} total={all} />
    </div>
  )
}

export default App