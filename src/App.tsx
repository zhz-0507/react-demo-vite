import { useState } from 'react'
import type { MouseEvent } from 'react'
import './App.css'

import List2 from './List2'

import UseState from './test/useState'

function App() {
  return (
    <>
      {/* 问卷列表 */}
      <List2></List2>
      {/* useState学习 */}
      <UseState></UseState>
    </>
  )
}

export default App
