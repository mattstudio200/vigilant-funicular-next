import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTaskForm from './components/AddTaskForm'
import Footer from './components/Footer'
import About from './components/About'
import { v4 as uuid4 } from 'uuid'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const localStorageTasksName = 'tasks'

  const [tasks, setTasks] = useState([])
  const [initLoad, setInitLoad] = useState(true)

  // componentDidMount
  useEffect(() => {
    const updateInitLoad = () => {
      setInitLoad(false)
    }
    const tasksFromLocalStorage = getTasksFromLocalStorage()
    setTasks(tasksFromLocalStorage)
    updateInitLoad()
  }, [])

  const getTasksFromLocalStorage = () =>
    localStorage.getItem(localStorageTasksName)
      ? JSON.parse(localStorage.getItem(localStorageTasksName))
      : []

  // // componentDidUpdate
  useEffect(() => {
    // Only update after init load
    if (!initLoad) {
      localStorage.setItem(localStorageTasksName, JSON.stringify(tasks))
    }
  }, [tasks, initLoad])

  // Add Task
  const addTask = (task) => {
    const id = uuid4()
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    // console.log(`delete ${id}`)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <Router>
      <Routes></Routes>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />

        <Routes>
          <Route path="about" element={<About />} />
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTaskForm onAddTask={addTask} />}

                {tasks.length ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    toggleReminder={toggleReminder}
                  />
                ) : (
                  <h3>No Tasks</h3>
                )}
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
