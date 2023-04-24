import { useContext, useState, useEffect } from 'react'
import Header from '../components/Header'
import Tasks from '../components/Tasks'
import AddTaskForm from '../components/AddTaskForm'
import Footer from '../components/Footer'

import AppContext from '../context/app/appContext'
import Layout from '@/components/Layout'

export default function Home() {
  const appContext = useContext(AppContext)

  const { getTasks, saveTasks, tasks, showAddTask, setShowAddTask } = appContext

  const [initLoad, setInitLoad] = useState(true)

  // componentDidMount
  useEffect(() => {
    const updateInitLoad = () => {
      setInitLoad(false)
    }

    getTasks()
    updateInitLoad()
    // eslint-disable-next-line
  }, [])

  // // componentDidUpdate
  useEffect(() => {
    // Only update after init load
    if (!initLoad) {
      saveTasks()
    }
  }, [tasks, initLoad])
  return (
    <Layout>
      <Header title="Task Tracker Next" />
      <>
        {showAddTask && <AddTaskForm />}
        {tasks.length ? <Tasks tasks={tasks} /> : <h3>No Tasks</h3>}
      </>
    </Layout>
  )
}
