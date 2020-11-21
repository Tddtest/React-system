/***
 * @auth: frog
 * @time: 2020/11/17
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React  from 'react';
import useState from './hooks/useState';


const Test = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(
      count + 1,
      (newState) => {
        console.log(newState);
      }
    );
  }

  return (
    <div>
      { count }

      <br/>

      <button onClick={handleClick}>点我更改state</button>

    </div>
  )
}

export default Test;
