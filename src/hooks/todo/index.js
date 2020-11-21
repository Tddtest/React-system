/***
 * @auth: frog
 * @time: 2020/11/20
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { useReducer, useEffect } from 'react';
import Header from './Header';
import Content from './Content';

import './index.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      let todoList = [];
      if( typeof action.payload === 'string' ) {
        todoList = [{
          id: (Math.random() * 100000000).toFixed(0),
          title: action.payload,
          status: false,
        }, ...state.todoList];
      } else {
        todoList = action.payload;
      }

      return {
        ...state,
        todoList,
      }
    }
    case 'DELETE': {
      const todoList = state.todoList.filter(todo => todo.id !== action.payload );

      return {
        ...state,
        todoList,
      }
    }
    case 'FINISH': {
      const todoList = state.todoList.map(todo => {
        if( todo.id === action.payload ) {
          todo.status = true;
        }

        return todo;
      });

      return {
        ...state,
        todoList,
      }
    }

    default: {

      return state;
    }
  }
}

export const TodoContext = React.createContext();
const TodoList = () => {

  const [state, dispatch] = useReducer(reducer, { todoList: [] } );

  useEffect(() => {
    (new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{}, {}, {}]);
      },2000);
    })).then((res) => {
      dispatch({
        type: 'ADD',
        payload: res,
      });
    });
  }, []);

  return (
    <TodoContext.Provider value={{
      state,
      dispatch,
    }}>
      <div className="todoList">
        <Header />
        <Content />
      </div>
    </TodoContext.Provider>
  )

}

export default TodoList;
