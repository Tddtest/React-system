/***
 * @auth: frog
 * @time: 2020/10/18
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {Component} from 'react';
import Login from './component/form/login';
import Register from './component/form/register';

class FormParent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-parent">
        <Login />
        <Register />
      </div>
    );
  }
}

export default FormParent;