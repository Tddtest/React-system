/***
 * @auth: frog
 * @time: 2020/10/29
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {Component} from 'react';
import Tag from './Tag';

import './index.css';

class MultipleTag extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      value: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      value: e.target.value,
    })
  }

  handleOnKeyDown = (e) => {
    if( e.keyCode === 13 ) {
      this.setState({
        ...this.state,
        tags: [...this.state.tags, this.state.value],
        value: '',
      });
    }
  }

  render() {

    return (
      <div className="multiple-tag">
        <div className="tag">
          {
            this.state.tags.map(t => <Tag value={t} close={(value) => {
              this.setState({
                ...this.state,
                tags: this.state.tags.filter(f => f !== value),
              })
            }} key={t} />)
          }
        </div>
        <div className="input">
          <input
            value={this.state.value}
            type="text"
            onChange={this.handleChange}
            onKeyDown={this.handleOnKeyDown}
          />
        </div>
      </div>
    );
  }
}

export default MultipleTag;