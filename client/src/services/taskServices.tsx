import axios from 'axios'

export const getTasks = async () => {
  try {
    const result = await axios.get('/tasks')
    return result.data
  } catch (error) {
    console.log('Error on getting all tasks.', error)
  }
}

export const addTask = async (task: IAddTask) => {
  try {
    const result = await axios.post('/add-task', task)
    return result.data
  } catch (error) {
    console.log('Error on adding new task.', error)
  }
}

export const updateTask = async (task: ITask) => {
  try {
    const result = await axios.put('/update-task', task)
    return result.data
  } catch (error) {
    console.log('Error on updating new task.', error)
  }
}

export const removeTask = async (_id: string) => {
  try {
    const result = await axios.delete(`/remove-task/${_id}`)
    return result.data
  } catch (error) {
    console.log('Error on removing new task.', error)
  }
}
