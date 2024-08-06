import { FC, useState } from 'react'

interface propsType {
  num: number
}
const CountLabel: FC<propsType> = props => {
  const { num } = props

  const [prevNum, setPrevNum] = useState(num)
  const [trend, setTrend] = useState('')

  console.log('num', num)
  console.log('prevNum', prevNum)
  if (prevNum !== num) {
    setPrevNum(num)
    setTrend(num > prevNum ? 'increasing' : 'decreasing')
  }

  return (
    <div>
      <h1>{num}</h1>
      {trend && <p>The count is {trend}</p>}
    </div>
  )
}

export default CountLabel
