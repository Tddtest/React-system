/***
 * @auth: frog
 * @time: 2020/11/20
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { useState, useEffect, useLayoutEffect } from 'react';

const LayoutEffect = () => {

  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log('useEffect', count);

    const crt = Date.now();

    while (Date.now() - crt < 500 ) {}

    if( count === 0 ) {
      setCount(100 * Math.random() * 1000 );
    }

  }, [count]);


  return (
    <div onClick={() => setCount(0)}>
      { count }
    </div>
  )

}

export default LayoutEffect;
