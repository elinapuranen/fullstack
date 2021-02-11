import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ text, handleClick }) => {
  return(
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const StatisticLine = ({ text, amount }) => {
  if (text == 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{amount}%</td>
      </tr>

    )
  } else {
    return (
      <tr>
        <td>{text}</td>
        <td>{amount}</td>
      </tr>
    )
  }
}

const Statistics = ({ statistics }) => {
  return (
    <tbody>
      <StatisticLine text={statistics[0].text} amount={statistics[0].amount} />
      <StatisticLine text={statistics[1].text} amount={statistics[1].amount} />
      <StatisticLine text={statistics[2].text} amount={statistics[2].amount} />
      <StatisticLine text={statistics[3].text} amount={statistics[3].amount} />
      <StatisticLine text={statistics[4].text} amount={statistics[4].amount} />
      <StatisticLine text={statistics[5].text} amount={statistics[5].amount} />
    </tbody>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sum = good + neutral + bad
  let average = (good - bad) / sum
  let positive = good / sum * 100

  const statistics = [
    {
      text: 'good',
      amount: good
    },
    {
      text: 'neutral',
      amount: neutral
    },
    {
      text: 'bad',
      amount: bad
    },
    {
      text: 'all',
      amount: sum
    },
    {
      text: 'average',
      amount: average
    },
    {
      text: 'positive',
      amount: positive
    }, 
  ]

  return (
    <div>
      <h1>give feedback</h1>
      <div className="buttons">
        <Button handleClick={() => setGood(good + 1)} text='good'/>
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
        <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      </div>
      <h1>statistics</h1>
      {sum != 0
        ?
        <table>
            <Statistics statistics={statistics} />
        </table>
        :
        <div>
          <p>No feedback given</p>
        </div>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)