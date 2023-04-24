import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_LOADING,
  UPDATE_TASK,
  SAVE_TASKS,
  SET_SHOW_ADD_TASK,
} from '../types'

const Reducer = (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: localStorage.getItem('tasks')
          ? JSON.parse(localStorage.getItem('tasks'))
          : [],
        loading: false,
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        loading: false,
      }
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, reminder: !task.reminder }
            : task
        ),
        loading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SAVE_TASKS:
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
      return {
        ...state,
        loading: false,
      }
    case SET_SHOW_ADD_TASK:
      return {
        ...state,
        showAddTask: !state.showAddTask,
      }
    default:
      return state
  }
}

export default Reducer
