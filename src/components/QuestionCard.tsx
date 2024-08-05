import { FC } from 'react'
import './QuestionCard.css'

type PropsType = {
  id: string
  title: string
  isPublished: boolean
  onDelete: (id: string) => void
  onPublish: (id: string) => void
}

const QuestionCard: FC<PropsType> = props => {
  console.log('props', props)
  const { id, title, isPublished, onDelete, onPublish } = props

  const publish = (id: string) => {
    onPublish && onPublish(id)
  }

  const del = (id: string) => {
    onDelete && onDelete(id)
  }

  return (
    <div key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {/* 条件判断 */}
      {isPublished ? <span className="published-span">已发布</span> : <span>未发布</span>}
      &nbsp;
      <button
        onClick={() => {
          publish(id)
        }}
      >
        发布问卷
      </button>
      &nbsp;
      <button
        onClick={() => {
          del(id)
        }}
      >
        删除问卷
      </button>
    </div>
  )
}

export default QuestionCard
