/***
 * @auth: frog
 * @time: 2020/11/17
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {Component} from 'react';

class ClassComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      a: 1,
      b: 2,
    }
  }

  handleClick = () => {
    this.setState(
      {
        ...this.state,
        a: this.state.a + 1,
      },
      () => {
        console.log('内层的打印：', this.state.a);
      }
    );

    console.log('外层的打印：', this.state.a);
  }

  render() {
    return (
      <div>
        { this.state.a }
        <br/>

        <button onClick={this.handleClick}>点我改变state</button>
      </div>
    );
  }
}

export default ClassComponent;