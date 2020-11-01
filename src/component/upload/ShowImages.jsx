/***
 * @auth: frog
 * @time: 2020/10/26
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {Component} from 'react';

class ShowImages extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={this.props.onClick} className="img">
        <img src={this.props.img.url} alt=""/>
      </div>
    );
  }
}

export default ShowImages;