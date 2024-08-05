import { useState } from 'react'
import reactLogo from './assets/react.svg'
import type { MouseEvent } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import List2 from './List2'
function App() {
  const fn = (event: MouseEvent, name: string) => {
    event.preventDefault()
    console.log('click', event)
    console.log('name', name)
  }
  const flag: boolean = false

  const list = [
    { name: 'name1', age: '1' },
    { name: 'name2', age: '2' },
    { name: 'name3', age: '3' },
  ]

  const questionList = [
    {
      id: '1',
      question: 'question1',
      answer: 'answer1',
      isPublished: true,
    },
    {
      id: '2',
      question: 'question2',
      answer: 'answer2',
      isPublished: false,
    },
    {
      id: '3',
      question: 'question3',
      answer: 'answer3',
      isPublished: false,
    },
    {
      id: '4',
      question: 'question4',
      answer: 'answer4',
      isPublished: true,
    },
  ]

  const handleEdit = (id: string) => {
    console.log('edit', id)
  }

  const [count, setCount] = useState(1)

  const handleAdd = () => {
    console.log('add')
    setCount(count + 1)
  }

  return (
    <>
      {/* 测试 */}

      <List2></List2>
    </>
  )
}

export default App
