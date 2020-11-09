/***
 * @auth: frog
 * @time: 2020/11/2
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useContext,
  useMemo,
  useImperativeHandle,
  useLayoutEffect,
  useCallback,
  useDebugValue,
} from 'react';

let input;
let crt;
const App = (props) => {

  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const crtRef = React.createRef();
  console.log('input === inputRef', input === inputRef);
  console.log('crt === crtRef', crt === crtRef);
  input = inputRef;
  crt = crtRef;


  return (
    <div>
      用户名：
      <input ref={inputRef} type='text'/>
      <br/>
      <button onClick={() => { inputRef.current.focus()}}>获得焦点</button>
      <br/>
      <button onClick={() => setCount(count + 1)}>+</button>
      <br/>
      <p> { count } </p>
    </div>
  )
}

export default App;
