import Button from './Button'
import { useRouter } from 'next/router'

const Header = ({ title, onAdd, showAddTask }) => {
  const router = useRouter()
  return (
    <header className="header">
      <h1>{title}</h1>
      {router.pathname === '/' && (
        <Button
          color={showAddTask ? 'red' : 'green'}
          text={showAddTask ? 'close' : 'add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
