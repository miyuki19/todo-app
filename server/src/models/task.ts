import { model, Schema } from 'mongoose'
import { ITask } from '../types/task'

const taskSchema: Schema = new Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
})

export default model<ITask>('Task', taskSchema)
