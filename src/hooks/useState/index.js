/***
 * @auth: frog
 * @time: 2020/11/17
 * @func:
 * @params: user.codedmx.top
 * @return:
 * @updateTime:
 ***/
import React, { useRef, useEffect, useCallback } from 'react';

function useState( initialHookState ) {

  const [state, _setState] = React.useState(initialHookState);
  const callbackRef = useRef();
  const firstRef = useRef(true);

  const setState = useCallback((newState, callBack) => {
    _setState(newState);
    callbackRef.current = callBack;
  },[]);

  useEffect(() => {
    if( firstRef.current ) {
      firstRef.current = false;
      return;
    }
    callbackRef.current(state);
  }, [state]);

  return [state, setState];
}

export default useState;
