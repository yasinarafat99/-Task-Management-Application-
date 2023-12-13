import React, { useReducer } from 'react'
import { initialValue, reducer } from '../Reducer/Reducer';
import { TodoContext } from '../Context/Context';

function Provider({children}) {
  const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <div>
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    </div>
  )
}

export default Provider;