import { FC, useState, useEffect } from 'react'

import { produce } from 'immer'

import QuestionCard from './components/QuestionCard.tsx'
const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  // 没有依赖项
  useEffect(() => {
    console.log('初始化')
  }, [])

  // 有依赖项
  useEffect(() => {
    console.log('questionList更改')
  }, [questionList])

  const onAdd = () => {
    const r = Math.random().toString().slice(-3)
    setQuestionList(
      produce(draft => {
        draft.push({ id: `q${r}`, title: `问卷${r}`, isPublished: false })
      })
    )
    // setQuestionList([...questionList, { id: `q${r}`, title: `问卷${r}`, isPublished: false }])
  }

  const onDelete = (id: string) => {
    setQuestionList(
      produce(draft => {
        draft.splice(
          draft.findIndex(q => q.id === id),
          1
        )
      })
    )
  }

  const onPublish = (id: string) => {
    setQuestionList(
      // 修改 find
      produce(draft => {
        const q = draft.find(q => q.id === id)
        if (q) {
          q.isPublished = true
        }
      })
    )
    // setQuestionList(
    //   // 修改 map
    //   questionList.map(q => {
    //     if (q.id !== id) return q

    //     return {
    //       ...q,
    //       isPublished: true,
    //     }
    //   })
    // )
  }

  return (
    <div>
      {questionList.map(question => {
        const { id, title, isPublished } = question

        return (
          <QuestionCard
            key={id}
            id={id}
            title={title}
            isPublished={isPublished}
            onDelete={onDelete}
            onPublish={onPublish}
          ></QuestionCard>
        )
      })}
      <div>
        <button
          onClick={() => {
            onAdd()
          }}
        >
          新增问卷
        </button>
      </div>
    </div>
  )
}

export default List2
