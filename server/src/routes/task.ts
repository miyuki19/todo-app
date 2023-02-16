import { Router } from 'express'
import {
  getAllTasks,
  addNewTask,
  updateTask,
  removeTask,
} from '../controllers/task'

const router: Router = Router()

router.get('/tasks', getAllTasks)

router.post('/add-task', addNewTask)

router.put('/update-task', updateTask)

router.delete('/remove-task/:_id', removeTask)

router.get('/test', (req, res) => {
  res.json({ message: 'test request ok' })
})

export default router
