import { FC, useMemo, useState } from 'react'

const UseMemo: FC = () => {
  console.log('UseMemo组件初始化')
  // 这里可以理解为vue的computed
  const [count1, setCount1] = useState(10)
  const [count2, setCount2] = useState(20)
  const sum = useMemo(() => {
    console.log('sum计算了')
    return count1 + count2
  }, [count1, count2])
  const [text, setText] = useState('')
  return (
    <div>
      <h1>useMemo</h1>
      <div>
        <button onClick={() => setCount1(count1 + 1)}>count1: {count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>count2: {count2}</button>
        <input type="text" onChange={e => setText(e.target.value)} />
        输入框的值：<span>{text}</span>
        sum的值：<span>{sum}</span>
      </div>
    </div>
  )
}

export default UseMemo
