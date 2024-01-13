import React from 'react'
import './styles.css'
import Counter from './Counter'
const App = () => {
  const num = 0
  return (
    <div>
      <h1>Hello React, it's me ahmed</h1>
      <h4>{process.env.NODE_ENV}</h4>
      <h4>{process.env.name}</h4>
      <Counter />
    </div>
  )
}

export default App
