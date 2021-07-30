/*
 * @Author: ryyyyy
 * @Date: 2021-04-16 19:51:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-16 19:59:00
 * @Description: Do not edit
 * @FilePath: /demo/src/components/context-container/index.js
 */
import React, { useState } from "react"
import { createStore } from "redux"
import { createContainer } from "unstated-next"

function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState)
  let decrement = () => setCount(count - 1)
  let increment = () => setCount(count + 1)
  return { count, decrement, increment }
}

let Counter = createContainer(useCounter);
let Counter2 = createContainer(useCounter);

function CounterDisplay() {
  let counter = Counter.useContainer()
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}
function CounterDisplay2() {
    let counter = Counter2.useContainer()
    return (
      <div>
        <button onClick={counter.decrement}>-</button>
        <span>{counter.count}</span>
        <button onClick={counter.increment}>+</button>
      </div>
    )
  }

function App() {
  return (
    <Counter.Provider>
        <CounterDisplay />
        <Counter2.Provider>
            <CounterDisplay2 />
        </Counter2.Provider>
    </Counter.Provider>
  )
}

export default App;
