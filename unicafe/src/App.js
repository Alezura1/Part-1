import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }

  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const StatisticLines = (props) => {
  const total = props.allClicks.good + props.allClicks.neutral + props.allClicks.bad
  const average = (props.allClicks.good * 1 + props.allClicks.bad * -1) / total
  const positive = props.allClicks.good * (100/total)

  if (total === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
       <tbody>
          <StatisticLine text="good" value={props.allClicks.good} />
          <StatisticLine text="neutral" value={props.allClicks.neutral} />
          <StatisticLine text="bad" value={props.allClicks.bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save props of each button to its own state

  const [allClicks, setClicks] = useState({ good:0, bad:0, neutral:0})

  const handleGoodClick = () => {
    setClicks({...allClicks, good: allClicks.good + 1})
  }

  const handleBadClick = () => {
    setClicks({...allClicks, bad: allClicks.bad + 1})
  }
  const handleNeutralClick = () => {
    setClicks({...allClicks, neutral: allClicks.neutral + 1})
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad'/>
      <h1>Statistics</h1>
      <StatisticLines allClicks={allClicks} />
    </div>
  )
}

export default App

