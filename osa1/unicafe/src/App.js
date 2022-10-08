import { useState } from 'react'

const StatisticLine = ({text,value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({good,neutral,bad,all}) => {
  if (all === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
      <table>
        <tbody>
        <StatisticLine value = {good} text = 'good ' />
        <StatisticLine value = {neutral} text = 'neutral '/>
        <StatisticLine value = {bad} text = 'bad '/>
        <StatisticLine value = {all} text =  'all '/>
        <StatisticLine value = {(good-bad)/all} text = 'average '/>
        <StatisticLine value = {(good/all*100)+' %'} text = 'positive '/>
        </tbody>
      </table>

  )
}  

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }
  return (
    <div>
      <h1>{'give feedback'}</h1>
      <Button handleClick={handleGoodClick} text = 'good'/>
      <Button handleClick={handleNeutralClick} text = 'neutral'/> 
      <Button handleClick={handleBadClick} text = 'bad'/>
      <h1>{'statistics'}</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {good+neutral+bad} />
    </div>
  )
}

export default App