import { useCallback, useEffect, useState } from 'react'
import { removeTask, updateTask } from '../services/taskServices'

const TaskList = (props: { allTasks: ITask[] }) => {
  const [tasks, setTasks] = useState(props.allTasks)

  useEffect(() => {
    setTasks(props.allTasks)
  }, [props.allTasks])

  const onRemoveTask = useCallback((_id: string) => {
    removeTask(_id)
      .then((data) => {
        setTasks(data.tasks as ITask[])
      })
      .catch((err: Error) => {
        console.log(err)
      })
  }, [])

  const onUpdateTask = useCallback((task: ITask) => {
    updateTask(task)
      .then((data) => {
        setTasks(data.tasks as ITask[])
      })
      .catch((err: Error) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h4>Your Tasks</h4>
      {tasks.map((task: ITask) => (
        <Task
          key={task._id}
          task={task}
          onRemoveTask={onRemoveTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </div>
  )
}

export default TaskList

const Task = (props: {
  task: ITask
  onRemoveTask: (_id: string) => void
  onUpdateTask: (task: ITask) => void
}) => {
  const [task, setTask] = useState(props.task)

  useEffect(() => {
    setTask(props.task)
  }, [props.task])

  const onUpdateTask = useCallback(() => {
    setTask((prev) => {
      const updateTask = {
        _id: prev._id,
        task: prev.task,
        status: !prev.status,
        timestamp: prev.timestamp,
      }
      props.onUpdateTask(updateTask)
      return updateTask
    })
  }, [])

  const onRemoveTask = useCallback(() => {
    props.onRemoveTask(task._id)
  }, [])

  return (
    <div>
      <div className={task.status === false ? 'task' : 'task is-complete'}>
        <button className="checkbox" onClick={onUpdateTask} />
        <div className="text">{task.task}</div>
        <button className="delete-task" onClick={onRemoveTask}>
          x
        </button>
      </div>
    </div>
  )
}
