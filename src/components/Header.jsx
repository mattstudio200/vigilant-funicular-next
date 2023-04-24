import { useContext } from 'react'
import Button from './Button'
import AppContext from '@/context/app/appContext'
import { useRouter } from 'next/router'

const Header = ({ title }) => {
  const appContext = useContext(AppContext)
  const { showAddTask, setShowAddTask } = appContext
  const router = useRouter()
  return (
    <header className="header">
      <h1>{title}</h1>
      {router.pathname === '/' && (
        <Button
          color={showAddTask ? 'red' : 'green'}
          text={showAddTask ? 'close' : 'add'}
          onClick={setShowAddTask}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
