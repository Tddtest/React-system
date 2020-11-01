/***
 * @auth: frog
 * @time: 2020/10/26
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {Component} from 'react';

class AddImages extends Component {

  constructor(props) {
    super(props);
    this.upload = React.createRef();
  }

  componentDidMount() {
    this.props.onRef(this.upload);
  }

  handleUploadClick = () => {
    this.upload.current.click();
  }

  handleUploadChange = ( ev ) => {
    const file = ev.target.files[0];

    const self = this;

    if( window.FileReader ) {
      const reader = new　FileReader();

      reader.readAsDataURL(file);
      const name = file.name;
      reader.onload = function (e) {
        const url = e.target.result;
        self.props.getImagesUrl({
          name,
          url,
        });
      }

    }

  };

  render() {
    return (
      <div onClick={this.handleUploadClick} className="img add">
        <input onChange={this.handleUploadChange} ref={this.upload} type="file"/>
      </div>
    );
  }
}

export default AddImages;