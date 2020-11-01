/***
 * @auth: frog
 * @time: 2020/10/31
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {Component} from 'react';

class RenderProps extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.render()
        }
      </div>
    );
  }
}

export default RenderProps;