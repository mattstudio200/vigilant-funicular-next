import { useState } from 'react'
import { useContext } from 'react'
import AppContext from '@/context/app/appContext'

import About from '@/components/About'
import Header from '@/components/Header'
import Layout from '@/components/Layout'

const AboutPage = () => {
  const appContext = useContext(AppContext)
  const { showAddTask, setShowAddTask } = appContext
  return (
    <Layout>
      <Header
        title="Task Tracker"
        onAdd={setShowAddTask}
        showAddTask={showAddTask}
      />
      <About />
    </Layout>
  )
}

export default AboutPage
