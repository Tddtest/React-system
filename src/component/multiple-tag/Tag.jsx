/***
 * @auth: frog
 * @time: 2020/10/29
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {Component} from 'react';

class Tag extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div aria-disabled className="tag-item">
        { this.props.value }
        <i onClick={() => this.props.close(this.props.value)}>×</i>
      </div>
    );
  }
}

export default Tag;