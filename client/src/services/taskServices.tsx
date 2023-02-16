import axios from 'axios'

const apiUrl: string = 'http://localhost:3001/api'

export const getTasks = async () => {
  try {
    const result = await axios.get(apiUrl + '/tasks')
    return result.data
  } catch (error) {
    console.log('Error on getting all tasks.', error)
  }
}

export const addTask = async (task: IAddTask) => {
  try {
    const result = await axios.post(apiUrl + '/add-task', task)
    return result.data
  } catch (error) {
    console.log('Error on adding new task.', error)
  }
}

export const updateTask = async (task: ITask) => {
  try {
    const result = await axios.put(apiUrl + '/update-task', task)
    return result.data
  } catch (error) {
    console.log('Error on updating new task.', error)
  }
}

export const removeTask = async (_id: string) => {
  try {
    const result = await axios.delete(apiUrl + `/remove-task/${_id}`)
    return result.data
  } catch (error) {
    console.log('Error on removing new task.', error)
  }
}
