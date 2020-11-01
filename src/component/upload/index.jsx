/***
 * @auth: frog
 * @time: 2020/10/25
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {Component} from 'react';
import ShowImages from './ShowImages';
import AddImages from './AddImages';

import './index.css';
class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      crt: null,
    }
  }

  handleGetImagesData = (url) => {
    let images = [...this.state.images];

    if( this.state.crt === null ) {
      images.unshift(url);
    } else {
      images[this.state.crt] = url;
    }

    this.setState({
      images,
    });
  }

  handleImgClick = (idx) => {
    this.setState({
      ...this.state,
      crt: idx,
    })
    this.uploadRef.current.click();
  }

  render() {

    return (
      <div className="upload">
        {
          this.state.images.map( (img, idx) => (
            <ShowImages idx={idx} onClick={() => this.handleImgClick(idx) } img={img} key={img.url} />
          ))
        }
        <AddImages onRef={(ref) => this.uploadRef = ref} getImagesUrl={this.handleGetImagesData} />
      </div>
    );
  }
}

export default Upload;