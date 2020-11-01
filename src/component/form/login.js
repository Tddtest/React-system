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

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login">
        <CommonBox login={
          (values) => {
            console.log('login', values);
          }
        } buttonName="登录" />
      </div>
    );
  }
}

export default Login;