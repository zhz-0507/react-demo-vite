import { FC, useState } from 'react'
import { useImmer } from 'use-immer'

import Form from './components/Form'
import CountLabel from './components/CountLabel'
// 严格模式下，会两次调用初始化函数，
const UseState: FC = () => {
  // useState入参：任意类型（基本数据类型/引用类型）
  const [name, setName] = useState('kobe')
  const [age, setAge] = useState(40)

  const updateName = () => {
    setName('james')
    console.log('name', name) // name kobe ，不会立即改变当前值，异步更新
  }

  const updateAge = () => {
    // setAge(age + 1)
    // setAge(age + 1)
    // setAge(age + 1)
    // 输出：age 41 ,调set函数不会更新已运行代码中的age，
    // 解决：向set函数增加更新函数，而不是一个状态
    setAge(age => age + 1) //setAge(40 + 1)
    setAge(age => age + 1) //setAge(41 + 1)
    setAge(age => age + 1) //setAge(42 + 1)

    // react会把更新函数放进队列中去执行，每个函数的返回值作为下一个状态去执行
    console.log('age', age)
  }

  // 传递更新函数和直接传递下一个状态的区别---------
  // updateAge函数执行三次，age的值是41
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  const [searchVal, setSearchVal] = useState('')
  const onInput = (value: string) => {
    setSearchVal(value)
  }

  // useState中的数据是不可改变数据

  const [form, setForm] = useImmer({
    name: '欧文',
    age: 20,
  })
  const updateFormName = () => {
    setForm(draft => {
      draft.name = '詹姆斯'
    })

    // 替换现有对象，不能直接改变
    // setForm({
    //   ...form,
    //   name: '詹姆斯'
    // })
  }

  // Immer 可以解决当前存在的问题--------
  // setForm((draft) => {
  //   draft.name = '詹姆斯'
  // })

  // 传递初始化函数和传递初始化状态之间的区别

  function createInitialTodo() {
    const initialTodo = []
    for (let i = 0; i < 10; i++) {
      initialTodo.push({
        id: i,
        text: 'Item ' + (i + 1),
      })
    }
    return initialTodo
  }

  // 1.createInitialTodo只在初始化的执行一次，当组件更新是不会重新触发
  // const [todo, setTodo] = useState(createInitialTodo);
  // 2.createInitialTodo会在每次渲染时运行
  const [todo, setTodo] = useState(createInitialTodo())
  const [text, setText] = useState('')

  // 使用key去重置状态，key变化，From组件会重新渲染
  const [version, setVersion] = useState(0)

  function handleReset() {
    setVersion(version + 1)
  }

  // 存储前一次渲染的信息
  const [num, setNum] = useState(0)

  return (
    <>
      <div>useState</div>
      <div>
        <span>{name}</span>
        <button onClick={() => updateName()}>修改name的值</button>
      </div>
      <div>
        <span>{age}</span>
        <button onClick={() => updateAge()}>修改age的值</button>
      </div>
      {/* 计数器 */}
      <div>
        <button onClick={handleClick}>You pressed me {count} times</button>
      </div>
      {/* 数据框 */}
      <div>
        <input
          type="text"
          onChange={e => {
            onInput(e.target.value)
          }}
        />
        <p>输入框的文字：{searchVal}</p>
      </div>
      {/* 更新对象和数组 */}
      <div>
        <span>{form.name}</span>
        <button
          onClick={() => {
            updateFormName()
          }}
        >
          修改对象中的数据
        </button>
      </div>
      {/* 传递初始化函数 */}
      <div>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button
          onClick={() => {
            setText('')
            setTodo([
              {
                id: todo.length,
                text: text,
              },
              ...todo,
            ])
          }}
        >
          Add
        </button>
        <ul>
          {todo.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
      {/* 使用key去重置状态 */}
      <div>
        <button onClick={handleReset}>Reset</button>
        <Form key={version}></Form>
      </div>
      {/* 存储前一次渲染的信息 */}
      <div>
        <button onClick={() => setNum(num + 1)}>Increment</button>
        <button onClick={() => setNum(num - 1)}>Decrement</button>
        <CountLabel num={num}></CountLabel>
      </div>
    </>
  )
}

export default UseState
