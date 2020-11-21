/***
 * @auth: frog
 * @time: 2020/11/17
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { memo } from 'react';


const Child1 = ( props ) => {



  console.log('我是child1', props.fn);

  return (
    <div>
      我是child1
    </div>
  );
}

export default memo(Child1);
