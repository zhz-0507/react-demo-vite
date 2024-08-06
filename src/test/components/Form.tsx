import { FC, useState } from 'react'

const Form: FC = () => {
  const [name, setName] = useState('Taylor')
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </div>
  )
}

export default Form
