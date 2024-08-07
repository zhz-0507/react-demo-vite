import './App.css'

import List2 from './List2'
import ClosureTrap from './ClosureTrap'

import UseState from './test/useState'
import UseEffect from './test/useEffect'
import UseRef from './test/useRef'
import UseMemo from './test/useMemo'
import UseCallback from './test/useCallback'

// 自定义hooks
import useTitle from './hooks/useTitle'
import useGetInfo from './hooks/useGetInfo.ts'

function App() {
  useTitle('zhz')
  const { loading, info } = useGetInfo()

  console.log('loading', loading)
  console.log('info', info)
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
      {/* 自定义hooks */}
      {/* hook规则
          usexxx命名
          1.在组件内部可以调用，其他hooks内
          2.不能在函数外部调用
          3.不能在循环、条件判断中使用
      */}
      {/* react中闭包陷阱 */}
      <ClosureTrap></ClosureTrap>
    </>
  )
}

export default App
