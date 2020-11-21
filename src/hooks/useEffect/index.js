/***
 * @auth: frog
 * @time: 2020/11/9
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { useRef, useEffect, useState } from 'react';

function UseEffectsss(props) {

  const divRef = useRef();
  const [count, setCount] = useState(0);

  useEffect(( ) => {

    getList();


  }, [count]);

  const getList = async () => {
    // 做异步请求
    const abs = await new Promise((resolve, reject) => {
      setTimeout(() => resolve('成功了'),3000);
    });
    console.log(abs);
  }

  return(
    <div style={{
      position: 'absolute',
      left: `${count}px`,
    }} ref={divRef}>
      kdkk

      <br/>
      {count}
      <br/>
      <button onClick={() => setCount(count + 1)}>  点我啊，大哥， 我便宜 </button>
    </div>
  )
}

export default UseEffectsss;