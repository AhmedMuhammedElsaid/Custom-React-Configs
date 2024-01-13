import React from 'react'
const Counter = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
export default Counter
