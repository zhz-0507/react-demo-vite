import { FC, useCallback, useState } from 'react'

const UseCallback: FC = () => {
  const [text, setText] = useState('')

  const fn1 = () => {
    console.log('fn1')
  }

  const fn2 = useCallback(() => {
    return console.log('fn2')
  }, [text])

  return (
    <div>
      <h1>UseCallback</h1>
      <button onClick={fn1}>点击我1</button>
      <button onClick={fn2}>点击我2</button>

      <input type="text" onChange={e => setText(e.target.value)} value={text} />
    </div>
  )
}

export default UseCallback
