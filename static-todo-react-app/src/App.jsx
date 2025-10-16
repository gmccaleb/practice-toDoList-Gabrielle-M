// Part 1: Build the Components
// 1. Create a components Folder:
// Inside the src directory, create a folder named components.
// 2. Create ToDoList.jsx:
// ○ Create a functional component called ToDoList.
// ○ Inside this component:
// ■ Define an array of static to-do list tasks (e.g., "Learn React",
// "Build a project", "Read documentation").
// ■ Hard code a To-Do list to display each task inside a bulleted list
// of your choice.
// 3. Create Header.jsx:
// ○ Create a functional component called Header.
// ○ Inside this component:
// ■ Render a simple heading that says "My To-Do List".


import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
     <ToDoList  />
     </main>
    </>
  )
}

export default App
