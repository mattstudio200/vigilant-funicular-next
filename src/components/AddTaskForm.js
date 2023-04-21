import { useState } from 'react'
import FlashMessage from '../components/FlashMessage'

const AddTaskForm = ({ onAddTask }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState('error')
  const [reminder, setReminder] = useState(false)

  const clearMessage = (timeout) => {
    setTimeout(() => setMessage(null), timeout)
  }
  const setMessageAndType = (message, type, timeout) => {
    setMessage(message)
    setMessageType(type)
    clearMessage(timeout)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      setMessageAndType('Please add a task', 'error', 3000)
      return
    }

    onAddTask({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
    setMessageAndType('Task created', 'success', 3000)
  }

  return (
    <>
      {message && (
        <FlashMessage
          message={message}
          color={`${messageType === 'error' ? 'red' : 'green'}`}
        />
      )}
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input className="btn btn-block" type="submit" value="Save" />
      </form>
    </>
  )
}

export default AddTaskForm
