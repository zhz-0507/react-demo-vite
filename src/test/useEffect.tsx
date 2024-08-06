import { FC, useEffect, useState } from 'react'

const UseEffect: FC = () => {
  const [count, setCount] = useState(0)

  // 产生副作用，没有依赖项
  useEffect(() => {
    console.log('useEffect-------111111')
  }, [])
  // 产生副作用，有依赖项
  useEffect(() => {
    console.log('useEffect-------222222')
  }, [count])
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setCount(count + 1)}>点击我{count}</button>
    </div>
  )
}

export default UseEffect
