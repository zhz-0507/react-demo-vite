import { FC, useRef } from 'react'

const UseRef: FC = () => {
  // 相当于拿到dom元素的实例
  const inputRef = useRef<HTMLInputElement>(null)

  const selectInput = () => {
    const inputEle = inputRef.current
    console.log('111', inputEle?.value)
  }
  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" ref={inputRef} defaultValue="hello world" />
      <button
        onClick={() => {
          selectInput()
        }}
      >
        选中input
      </button>
    </div>
  )
}

export default UseRef
