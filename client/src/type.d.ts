interface ITask {
  _id: string
  task: string
  status: boolean
  timestamp: string
}

interface IAddTask {
  task: string
}

type TaskProps = {
  task: ITask
}

type ApiDataType = {
  message: string
  status: string
  tasks: ITask[]
  task?: ITask
}
