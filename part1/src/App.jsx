import { useState } from 'react'


const Button = ({ name, handler }) => {
  return (
    <button onClick={handler}>{name}</button>
  )
}

const StatisticLine = ({ name, value }) => {
  return (
    <p>{name} {value}</p>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const sum = calcSum(good, neutral, bad)
  const avgWeighted = calcAvgWeighted(good, bad, sum)
  const positivePercent = calcPositivePercent(good, sum)

  if (sum !== 0) {
    return (
      <div>
        <StatisticLine name="good" value={good} />
        <StatisticLine name="neutral" value={neutral} />
        <StatisticLine name="bad" value={bad} />
        <StatisticLine name="sum" value={sum} />
        <StatisticLine name="avgWeighted" value={avgWeighted} />
        <StatisticLine name="positivePercent" value={positivePercent} />
      </div>
    )
  }
  else {
    return (
      <p>No feedback given</p>
    )
  }
}

// const sum = (values) => values.reduce((acc, i) => acc + i, 0)
const calcSum = (...args) => args.reduce((acc, i) => acc + i, 0)
const calcAvgWeighted = (good, bad, sum) => (good - bad) / sum
const calcPositivePercent = (good, sum) => good / sum * 100

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handler={() => setGood(good + 1)} />
      <Button name="neutral" handler={() => setNeutral(neutral + 1)} />
      <Button name="bad" handler={() => setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App