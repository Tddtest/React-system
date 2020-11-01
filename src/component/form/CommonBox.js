/***
 * @auth: frog
 * @time: 2020/10/18
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, { Component, createRef } from 'react';

class CommonBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.usernameRef = createRef();
    this.passwordRef = createRef();
  }
  // 受控组件 -- 就是指这个组件接受React的控制。
  // 非受控组件 -- 是指不接受react的控制， 直接通过dom的方式来获取或者操作值
  // 需要借助一个操作dom的东西。ref
  // ref 是可以直接操作dom 或者从原生dom上获取改元素的name 或者value 以及其他的值
  // 并且这个值 是实时更新的 ，只要你设置了，就会实时保存，但是不会引起页面的刷新。

  handleInputChange = (e) => {
    const { name, value } = e.target;
   /* // 对象的结构赋值
    const { name, value } = e.target;

    this.setState({
      // ... 扩展操作符
      ...this.state,
      [name]: value,
    });*/
    if( name === 'username' ) {
      this.usernameRef.current = value;
    } else {
      this.passwordRef.current = value;
    }

  }
  handleButtonClick = () => {
    /*console.log(this.state);
    // 调接口，登录
    */

    if( this.props.buttonName === '登录' ) {
      // 调用登录的接口楼
      this.props.login({
        username: this.usernameRef.current,
        password: this.passwordRef.current,
      });
    } else {
      // 调用注册的接口楼
      this.props.register({
        username: this.usernameRef.current,
        password: this.passwordRef.current,
      });
    }


  }

  render() {

    return (
      <div className="box">
        <p>
          <span>用户名：</span>
          <input name="username" ref={this.usernameRef} onChange={this.handleInputChange} type="text" placeholder="请输入用户名" />
        </p>
        <p>
            <span>
              密码：
            </span>
          <input name="password" ref={this.passwordRef} onChange={this.handleInputChange} type="password" placeholder="请输入密码" />
        </p>

        <p>
          <button onClick={this.handleButtonClick}>
            { this.props.buttonName }
          </button>
        </p>
      </div>
    );
  }
}

export default CommonBox;