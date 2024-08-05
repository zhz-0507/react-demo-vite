import { FC, useState } from 'react'

import QuestionCard from './components/QuestionCard.tsx'
const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  const onAdd = () => {
    const r = Math.random().toString().slice(-3)
    setQuestionList([...questionList, { id: `q${r}`, title: `问卷${r}`, isPublished: false }])
  }

  const onDelete = (id: string) => {
    const newQuestionList = questionList.filter(question => question.id !== id)
    setQuestionList(newQuestionList)
  }

  const onPublish = (id: string) => {
    setQuestionList(
      // 修改 map
      questionList.map(q => {
        if (q.id !== id) return q

        return {
          ...q,
          isPublished: true,
        }
      })
    )
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
