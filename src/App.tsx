import './App.css'

import List2 from './List2'

import UseState from './test/useState'
import UseEffect from './test/useEffect'
import UseRef from './test/useRef'
import UseMemo from './test/useMemo'
import UseCallback from './test/useCallback'

// 自定义hooks
import useTitle from './hooks/useTitle'

function App() {
  useTitle('zhz')
  return (
    <>
      {/* 问卷列表 */}
      <List2></List2>
      {/* useState学习 */}
      <UseState></UseState>
      {/* useEffect学习 */}
      <UseEffect></UseEffect>
      {/* useRef学习 */}
      <UseRef></UseRef>
      {/* useMemo学习 */}
      <UseMemo></UseMemo>
      {/* useCallback学习 */}
      <UseCallback></UseCallback>
    </>
  )
}

export default App
