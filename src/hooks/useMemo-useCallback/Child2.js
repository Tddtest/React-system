/***
 * @auth: frog
 * @time: 2020/11/17
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React from 'react';


const Child2 = ( props ) => {

  console.log('我是child2', props.fn);

  return (
    <div>
      我是child1
    </div>
  );
}

export default React.memo(Child2);
