/***
 * @auth: frog
 * @time: 2020/11/1
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React from 'react';

function Hoc(WrapperComponent) {


  return (props) => {
    return <WrapperComponent a={1} {...props} />
  }
}

export default Hoc;