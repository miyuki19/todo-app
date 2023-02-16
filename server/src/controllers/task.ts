import { Response, Request } from 'express'
import { ITask } from '../types/task'
import Task from '../models/task'

const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const allTasks: ITask[] = await Task.find()
    res.status(200).json({ allTasks })
  } catch (error) {
    throw error
  }
}

const addNewTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const task: ITask = new Task({
      task: req.body.task,
    })
    const newTask: ITask = await task.save()
    const allTasks: ITask[] = await Task.find()
    res.status(201).json({
      message: 'New task has been added',
      task: newTask,
      tasks: allTasks,
    })
  } catch (error) {
    throw error
  }
}

const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { _id, status } = req.body
    const updateTask: ITask | null = await Task.findByIdAndUpdate(_id, {
      status: status,
    })
    const allTasks: ITask[] = await Task.find()
    res.status(200).json({
      message: 'Task has been updated',
      task: updateTask,
      tasks: allTasks,
    })
  } catch (error) {
    throw error
  }
}

const removeTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const removedTask: ITask | null = await Task.findByIdAndRemove(
      req.params._id
    )
    const allTasks: ITask[] = await Task.find()
    res.status(200).json({
      message: 'Task has been removed',
      task: removedTask,
      tasks: allTasks,
    })
  } catch (error) {
    throw error
  }
}

export { getAllTasks, addNewTask, updateTask, removeTask }
