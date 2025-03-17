import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './containers/todo-list/todo-list.jsx'
import Header from './containers/header/header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <TodoList />
    </>
  )
}

export default App
