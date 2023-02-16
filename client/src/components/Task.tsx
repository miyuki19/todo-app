import { useEffect, useState } from 'react'
import { getTasks, addTask } from '../services/taskServices'

const Task = () => {
  const [allTasks, setAllTasks] = useState<ITask[]>([])

  const getAllTasks = () => {
    getTasks()
      .then((data) => {
        setAllTasks(data as ITask[])
      })
      .catch((err: Error) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <div>
      <h4>Your Tasks</h4>
      <div className="tasks">
        <div className="task">
          <div className="checkbox"></div>
          <div className="text">Study Node.JS</div>
          <div className="delete-task">x</div>
        </div>
        <div className="task is-complete">
          <div className="checkbox"></div>
          <div className="text">Study React</div>
          <div className="delete-task">x</div>
        </div>
      </div>
    </div>
  )
}

export default Task
