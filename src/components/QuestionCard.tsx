import { FC, useEffect } from 'react'
import './QuestionCard.css'

import classNames from 'classnames'

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

  // 副作用，简单理解就是产生一些其他的行为，就是组件的生命周期
  // 会执行两次
  // 第一次创建 销毁走完组件所有生命周期，第二次在创建，提前检查问题
  useEffect(() => {
    console.log('挂载')
    return () => {
      console.log('卸载', id)
    }
  }, [])

  const itemClass = classNames({
    'list-item': true,
    published: isPublished,
  })

  return (
    <div key={id} className={itemClass}>
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
