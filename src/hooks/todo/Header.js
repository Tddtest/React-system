/***
 * @auth: frog
 * @time: 2020/11/22
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { useContext, useCallback, useRef } from 'react';
import { TodoContext } from './index';

const Header = () => {

  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef();

  const handleKeyUp = useCallback((e) => {
    if( e.key === 'Enter' ) {
      dispatch({
        type: 'ADD',
        payload: e.target.value,
      });
      inputRef.current.value = '';
    }
  }, []);

  return (
    <header>
      <h2>我的待办事项:</h2>
      <input
        ref={inputRef}
        type='text'
        placeholder="请输入待办事项"
        onKeyUp={handleKeyUp}
      />
    </header>
  )

}

export default Header;
