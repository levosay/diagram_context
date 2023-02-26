import { useReducer } from 'react'
import { ContextApp } from '@/contexts/tableTabs/context.js'

export const SET_TAB = 'SET_TAB'

const initState = {
  tab: 1
}

export const TableTabsProvider = ({ children }) => {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case SET_TAB:
        return { ...state, tab: payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ContextApp.Provider value={{ dispatch, state }}>
      {children}
    </ContextApp.Provider>
  )
}
