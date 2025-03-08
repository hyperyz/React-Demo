import { useState } from 'react'


function App() {
  const [time, setTime] = useState(60)

  const runTime = () => {
    setInterval(() => {
      setTime(time - 1)
      console.log(time);

    }, 1000)
    console.log(time);
  }
  return (
    <>
      <button onClick={runTime}>点击开始倒计时</button>
      <div>这是一个倒计时{time}</div>
    </>

  )
}

export default App
