import { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import AppContext from '../context/app/appContext'

const Task = ({ task }) => {
  const appContext = useContext(AppContext)
  const { deleteTask, updateTask } = appContext

  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => updateTask(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
