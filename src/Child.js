/***
 * @auth: frog
 * @time: 2020/10/22
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {
  useEffect,
  useRef,
} from 'react';

const Child = (props) => {

  const inputRef = React.createRef();
  const nRef = useRef();

  useEffect(() => {
    props.onRef(nRef.current)
  }, []);



  return (
    <div>
      <input ref={(el) => nRef.current = el } type="text"/>
    </div>
  )
}


export default Child;