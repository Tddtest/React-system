/***
 * @auth: frog
 * @time: 2020/11/22
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { useContext, useCallback } from 'react';
import { TodoContext } from './index';
import Item from './Item';

const Content = () => {

  const { state: { todoList }, dispatch } = useContext(TodoContext);

  console.log(todoList);
  const deleteTodo = useCallback((id) => {
    dispatch({
      type: 'DELETE',
      payload: id,
    });
  }, [todoList, dispatch]);
  const finishTodo = useCallback((id) => {
    dispatch({
      type: 'FINISH',
      payload: id,
    });
  }, [todoList]);

  return (
    <div className='content'>
      <div className='content-top'>
        <h3>未做：</h3>
        <div className='content-man'>
          {
            todoList
              .filter(todo => !todo.status )
              .map(todo => (
                <Item
                  key={todo.id}
                  data={todo}
                  deleteTodo={deleteTodo}
                  finishTodo={finishTodo}
                />
              ))
          }
        </div>
      </div>
      <div className='content-bottom'>
        <h3>已做：</h3>
        <div className='content-man'>
          {
            todoList
              .filter(todo => todo.status )
              .map(todo => (
                <Item
                  key={todo.id}
                  data={todo}
                  deleteTodo={deleteTodo}
                  finishTodo={finishTodo}
                />
              ))
          }
        </div>
      </div>
    </div>
  )

}

export default Content;
