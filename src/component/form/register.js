/***
 * @auth: frog
 * @time: 2020/10/18
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {Component} from 'react';
import CommonBox from './CommonBox';

class Register extends Component {

  constructor(props) {
    super(props);
  }

  // render props
  // 状态提升 把子组件的状态提升到父组件中去使用，这种方式叫做状态提升。

  render() {
    return (
      <div className="register">
        <CommonBox register={
          (values) => {
            console.log('register', values);
          }
        } buttonName="注册" />
      </div>
    );
  }
}

export default Register;