import TaskList from './components/TaskList'
import { useEffect, useState } from 'react'
import { addTask, getTasks } from './services/taskServices'
import axios from 'axios'

const App = () => {
  const [task, setTask] = useState('')
  const [allTasks, setAllTasks] = useState<ITask[]>([])

  const getAllTasks = () => {
    getTasks()
      .then((data) => {
        setAllTasks(data.allTasks as ITask[])
      })
      .catch((err: Error) => {
        console.log(err)
      })
  }

  useEffect(() => {
    axios.defaults.baseURL = `${import.meta.env.VITE_APP_API_URL}`
    getAllTasks()
  }, [])

  const setNewTask = (e: React.FormEvent<HTMLInputElement>) => {
    setTask(e.currentTarget.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (task === '') return

    const newTask = { task: task }
    addTask(newTask)
      .then((data) => {
        setAllTasks(data.tasks as ITask[])
      })
      .catch((err: Error) => {
        console.log(err)
      })
    //clear input
    setTask('')
  }

  return (
    <div className="App">
      <h1>Welcome, Link</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your task"
          type="text"
          className="add-task-input"
          value={task}
          onChange={setNewTask}
        />
        <button className="add-task-button" type="submit">
          Add Task
        </button>
      </form>
      <TaskList allTasks={allTasks} />
    </div>
  )
}

export default App
