/***
 * @auth: frog
 * @time: 2020/11/17
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Child2 from './Child2';
import Child1 from './Child1';

const TestUseCallback = ( props ) => {

  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
  }
  // 假如这是 后台返回的数据;
  const asyncFn = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([12,3,3,4,534,56,6754,2,34,65,5674,7,8,345,325,234,265,546,546,54]);
    },0);
  });

  useEffect(() => {
    asyncFn().then(
      res => {
        // 本来正常逻辑，可以在setArr之前 进行数据包装，
        // 但是，这是正常逻辑，假如说，我们这个数据，在子组件当中会被修改，而且可能是多个子组件修改。
        setArr(res);
      }
    )
  }, []);

  const fn = useCallback(() => {

  }, []);

  // 对于计算量比较大，且比较频繁的操作， 那么我们应该使用useMemo、进行优化
  const newArr = useMemo(() => {
    return  arr.filter(a => {
      console.log('我执行了');
      return a % 2 !== 0;
    });

  }, [arr]);

  return (
    <div>
      { count }
      <br/>
      <button onClick={handleClick}>点我改变count</button>
      <hr/>
      <br/>
      <Child1
        fn={
          newArr
        }
      />
      <hr/>
      <Child2 fn={newArr} />
    </div>
  )
}

export default TestUseCallback;
