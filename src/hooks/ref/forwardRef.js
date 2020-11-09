/***
 * @auth: frog
 * @time: 2020/11/9
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { useRef, useState, useImperativeHandle } from 'react';

const Child = (props, parentRef) => {
  const inputRef = useRef();


  /*useImperativeHandle(parentRef, () => {
    return {
      name: '码农技艺',
      focus: () => {
        inputRef.current.focus();
      }
    }
  });*/

  return (
    <input ref={inputRef} type='text'/>
  )
}
const ForwardChild = React.forwardRef(Child);

function Parent() {

  const parentRef = useRef();


  const handleClick = () => {
    console.log(parentRef.current);
  }

  return (
    <div>
      <ForwardChild ref={parentRef} />

      <button onClick={handleClick}>提交</button>
    </div>
  )

}

export default Parent;