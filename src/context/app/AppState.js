import React, { useReducer } from 'react'
import { v4 as uuid4 } from 'uuid'

import AppContext from './appContext'
import AppReducer from './AppReducer'

import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_LOADING,
  UPDATE_TASK,
} from '../types'

const AppState = (props) => {
  const initalState = {
    tasks: [],
    showAddTask: false,
    loading: false,
  }

  const [state, dispatch] = useReducer(AppReducer, initalState)

  const getTasks = async () => {
    setLoading()

    const tasksFromStorage = localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : []

    dispatch({
      type: GET_TASKS,
      payload: tasksFromStorage,
    })
  }

  const addTask = async (task) => {
    const id = uuid4()
    setLoading()

    dispatch({
      type: ADD_TASK,
      payload: { id, ...task },
    })
  }

  const deleteTask = async (id) => {
    setLoading()

    dispatch({
      type: DELETE_TASK,
      payload: id,
    })
  }

  const updateTask = async (id) => {
    setLoading()

    dispatch({
      type: UPDATE_TASK,
      payload: id,
    })
  }

  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    })

  return (
    <AppContext.Provider
      value={{
        tasks: state.tasks,
        loading: state.loading,
        getTasks,
        addTask,
        deleteTask,
        updateTask,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
