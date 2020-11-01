/***
 * @auth: frog
 * @time: 2020/11/2
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { Component, useContext } from 'react';
import { Global } from '../../index';
const App = () => {

  const context = useContext(Global);
  console.log(context);

  return (
    <div>dsfsdf</div>
  )

}

class TestContext extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.context.a);
    return (
      <div>
        <App />
      </div>
    );
  }
}

export default TestContext;