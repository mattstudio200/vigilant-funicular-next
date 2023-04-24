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
  SAVE_TASKS,
  SET_SHOW_ADD_TASK,
} from '../types'

const AppState = (props) => {
  const initalState = {
    tasks: [],
    showAddTask: false,
    loading: false
  }

  const [state, dispatch] = useReducer(AppReducer, initalState)

  const getTasks = async () => {
    setLoading()

    dispatch({
      type: GET_TASKS,
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

  const updateTask = (id) => {
    setLoading()

    dispatch({
      type: UPDATE_TASK,
      payload: id,
    })
  }

  const saveTasks = () => {
    setLoading()

    dispatch({
      type: SAVE_TASKS,
    })
  }

  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    })

  const setShowAddTask = () =>
    dispatch({
      type: SET_SHOW_ADD_TASK,
    })

  return (
    <AppContext.Provider
      value={{
        tasks: state.tasks,
        loading: state.loading,
        showAddTask: state.showAddTask,
        getTasks,
        addTask,
        deleteTask,
        updateTask,
        saveTasks,
        setShowAddTask,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
