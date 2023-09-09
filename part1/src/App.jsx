import { useState } from 'react'


const Button = ({name, handler}) => {
  return (
    <button onClick={handler}>{name}</button>
  )
}

const Statistic = ({name, value}) => {
  return (
    <p>{name} {value}</p>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good"     handler={() => setGood(good + 1)} />
      <Button name="neutral"  handler={() => setNeutral(neutral + 1)} />
      <Button name="bad"      handler={() => setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistic name="good"    value={good} />
      <Statistic name="neutral" value={neutral} />
      <Statistic name="bad"     value={bad} />
    </div>
  )
}

export default App