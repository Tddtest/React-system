/***
 * @auth: frog
 * @time: 2020/11/9
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { useRef, useState } from 'react';

function Ref2() {

  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current);
  }

  return (
    <div>
      <input onChange={(event) => {
        inputRef.current = event.target.value;
      }} ref={inputRef} type='text'/>

      <button onClick={handleClick}>提交</button>
    </div>
  )

}

export default Ref2;