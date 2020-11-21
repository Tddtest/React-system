/***
 * @auth: frog
 * @time: 2020/11/20
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { useReducer,useState } from 'react';

function reducer(state, action) {

  switch (action.type) {

    case 'ADD': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case 'DECR': {
      return {
        ...state,
        count: state.count - 1,
      }
    }

    default:
      return state;

  }
}

const init = { count: 1 };

const Reducers = () => {

  const [state, dispatch] = useReducer(reducer, init);

  return (
    <div>
      Count: { state.count }
      <br/>
      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
      <br/>
      <button onClick={() => dispatch({ type: 'DECR' })}>-</button>
    </div>
  )

}

export default Reducers;
